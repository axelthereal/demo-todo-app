export default {
    data() {
      return {
        count: 0
      }
    },
    template: `
      <button style="btn btn-primary btn-sm" @click="count++">
        You clicked me {{ count }} times.
      </button>`
  }