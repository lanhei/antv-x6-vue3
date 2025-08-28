import { createRouter, createWebHistory } from 'vue-router'
import TestView from '../views/TestView.vue'
import Process from '../views/Process.vue'
import AIDag from '../views/AIDag.vue'
import DataDag from '../views/DataDag.vue'
import Er from '../views/Er.vue'
import Mind from '../views/Mind.vue'
import BPMN from '../views/Bpmn.vue'
import SWIM from '../views/Swimlane.vue'
import ELK from '../views/Elk.vue'
import Organizational from '../views/Organizational.vue'
import OrganizationalAuto from '../views/OrganizationalAuto.vue'
import UML from '../views/Uml.vue'
import Tree from '../views/Tree.vue'
import RectNodes from '../views/RectNodes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: TestView,
    },
    {
      path: '/process',
      name: 'process',
      component: Process,
    },
    {
      path: '/aidag',
      name: 'aidag',
      component: AIDag,
    },
    {
      path: '/datadag',
      name: 'datadag',
      component: DataDag,
    },
    {
      path: '/er',
      name: 'er',
      component: Er,
    },
    {
      path: '/mind',
      name: 'mind',
      component: Mind,
    },
    {
      path: '/bpmn',
      name: 'bpmn',
      component: BPMN,
    },
    {
      path: '/swim',
      name: 'swim',
      component: SWIM,
    },
    {
      path: '/elk',
      name: 'elk',
      component: ELK,
    },
    {
      path: '/org',
      name: 'org',
      component: Organizational,
    },
    {
      path: '/orgAuto',
      name: 'orgAuto',
      component: OrganizationalAuto,
    },
    {
      path: '/uml',
      name: 'uml',
      component: UML,
    },
    {
      path: '/rect',
      name: 'rect',
      component: RectNodes,
    },
  ],
})

export default router
