<template>
  <div id="container"></div>
</template>

<script lang="ts">
import { Graph, Path, Edge, Platform } from "@antv/x6";
import { Selection } from "@antv/x6-plugin-selection";
import { register } from "@antv/x6-vue-shape";
import DataProcessingDagNode from "../components/DataProcessingDagNode.vue";

// 元素校验状态
enum CellStatus {
  DEFAULT = "default",
  SUCCESS = "success",
  ERROR = "error",
}

export default {
  mounted() {
    register({
      shape: "data-processing-dag-node",
      width: 212,
      height: 48,
      component: DataProcessingDagNode,
      // port默认不可见
      ports: {
        groups: {
          in: {
            position: "left",
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "transparent",
                strokeWidth: 1,
                fill: "transparent",
              },
            },
          },

          out: {
            position: {
              name: "right",
              args: {
                dx: -32,
              },
            },

            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: "transparent",
                strokeWidth: 1,
                fill: "transparent",
              },
            },
          },
        },
      },
    });

    // 注册连线
    Graph.registerConnector(
      "curveConnector",
      (sourcePoint, targetPoint) => {
        const hgap = Math.abs(targetPoint.x - sourcePoint.x);
        const path = new Path();
        path.appendSegment(
          Path.createSegment("M", sourcePoint.x - 4, sourcePoint.y)
        );
        path.appendSegment(
          Path.createSegment("L", sourcePoint.x + 12, sourcePoint.y)
        );
        // 水平三阶贝塞尔曲线
        path.appendSegment(
          Path.createSegment(
            "C",
            sourcePoint.x < targetPoint.x
              ? sourcePoint.x + hgap / 2
              : sourcePoint.x - hgap / 2,
            sourcePoint.y,
            sourcePoint.x < targetPoint.x
              ? targetPoint.x - hgap / 2
              : targetPoint.x + hgap / 2,
            targetPoint.y,
            targetPoint.x - 6,
            targetPoint.y
          )
        );
        path.appendSegment(
          Path.createSegment("L", targetPoint.x + 2, targetPoint.y)
        );

        return path.serialize();
      },
      true
    );

    Edge.config({
      markup: [
        {
          tagName: "path",
          selector: "wrap",
          attrs: {
            fill: "none",
            cursor: "pointer",
            stroke: "transparent",
            strokeLinecap: "round",
          },
        },
        {
          tagName: "path",
          selector: "line",
          attrs: {
            fill: "none",
            pointerEvents: "none",
          },
        },
      ],
      connector: { name: "curveConnector" },
      attrs: {
        wrap: {
          connection: true,
          strokeWidth: 10,
          strokeLinejoin: "round",
        },
        line: {
          connection: true,
          stroke: "#A2B1C3",
          strokeWidth: 1,
          targetMarker: {
            name: "classic",
            size: 6,
          },
        },
      },
    });

    Graph.registerEdge("data-processing-curve", Edge, true);

    const graph: Graph = new Graph({
      container: document.getElementById("container")!,
      panning: {
        enabled: true,
        eventTypes: ["leftMouseDown", "mouseWheel"],
      },
      mousewheel: {
        enabled: true,
        modifiers: "ctrl",
        factor: 1.1,
        maxScale: 1.5,
        minScale: 0.5,
      },
      highlighting: {
        magnetAdsorbed: {
          name: "stroke",
          args: {
            attrs: {
              fill: "#fff",
              stroke: "#31d0c6",
              strokeWidth: 4,
            },
          },
        },
      },
      connecting: {
        snap: true,
        allowBlank: false,
        allowLoop: false,
        highlight: true,
        sourceAnchor: {
          name: "left",
          args: {
            dx: Platform.IS_SAFARI ? 4 : 8,
          },
        },
        targetAnchor: {
          name: "right",
          args: {
            dx: Platform.IS_SAFARI ? 4 : -8,
          },
        },
        createEdge() {
          return graph.createEdge({
            shape: "data-processing-curve",
            attrs: {
              line: {
                strokeDasharray: "5 5",
              },
            },
            zIndex: -1,
          });
        },
        // 连接桩校验
        validateConnection({ sourceMagnet, targetMagnet }) {
          // 只能从输出链接桩创建连接
          if (
            !sourceMagnet ||
            sourceMagnet.getAttribute("port-group") === "in"
          ) {
            return false;
          }
          // 只能连接到输入链接桩
          if (
            !targetMagnet ||
            targetMagnet.getAttribute("port-group") !== "in"
          ) {
            return false;
          }
          return true;
        },
      },
    });

    graph.use(
      new Selection({
        multiple: true,
        rubberEdge: true,
        rubberNode: true,
        modifiers: "shift",
        rubberband: true,
      })
    );

    // 节点状态列表
    const nodeStatusList = [
      {
        id: "node-0",
        status: "success",
      },
      {
        id: "node-1",
        status: "success",
      },
      {
        id: "node-2",
        status: "success",
      },
      {
        id: "node-3",
        status: "success",
      },
      {
        id: "node-4",
        status: "error",
        statusMsg: "错误信息示例",
      },
    ];

    // 边状态列表
    const edgeStatusList = [
      {
        id: "edge-0",
        status: "success",
      },
      {
        id: "edge-1",
        status: "success",
      },
      {
        id: "edge-2",
        status: "success",
      },
      {
        id: "edge-3",
        status: "success",
      },
    ];

    // 显示节点状态
    const showNodeStatus = () => {
      nodeStatusList.forEach((item) => {
        const { id, status, statusMsg } = item;
        const node = graph.getCellById(id);
        console.log(node);
        const data = node.getData() as CellStatus;
        console.log(data);
        node.setData({
          ...data,
          status,
          statusMsg,
        });
      });
    };

    // 开启边的运行动画
    const excuteAnimate = () => {
      graph.getEdges().forEach((edge) => {
        edge.attr({
          line: {
            stroke: "#3471F9",
          },
        });
        edge.attr("line/strokeDasharray", 5);
        edge.attr("line/style/animation", "running-line 30s infinite linear");
      });
    };

    // 关闭边的动画
    const stopAnimate = () => {
      graph.getEdges().forEach((edge) => {
        edge.attr("line/strokeDasharray", 0);
        edge.attr("line/style/animation", "");
      });
      edgeStatusList.forEach((item) => {
        const { id, status } = item;
        const edge = graph.getCellById(id);
        if (status === "success") {
          edge.attr("line/stroke", "#52c41a");
        }
        if (status === "error") {
          edge.attr("line/stroke", "#ff4d4f");
        }
      });
      // 默认选中一个节点
      graph.select("node-2");
    };

    //https:/x6.antv.antgroup.com/examples/showcase/data/data-processing-dag.json
    fetch("/data/data-processing-dag.json")
      .then((response) => response.json())
      .then((data) => {
        graph.fromJSON(data);
        console.log(data);
        const zoomOptions = {
          padding: {
            left: 10,
            right: 10,
          },
        };
        graph.zoomToFit(zoomOptions);
        setTimeout(() => {
          excuteAnimate();
        }, 2000);
        setTimeout(() => {
          stopAnimate();
        }, 3000);
        showNodeStatus();
      });
  },
};
</script>

<style>
@keyframes running-line {
  to {
    stroke-dashoffset: -1000;
  }
}
</style>