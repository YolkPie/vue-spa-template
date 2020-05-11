import Vue from 'vue'
import SkeletonHome from './skeleton-home.vue'
import SkeletonDetail from './skeleton-detail.vue'
import './common.scss'

export default new Vue({
  components: {
    SkeletonHome,
    SkeletonDetail
  },
  template: `
    <div>
      <skeleton-home id="skeleton-home" style="display:none"/>
      <skeleton-detail id="skeleton-detail" style="display:none"/>
    </div>
  `
})
