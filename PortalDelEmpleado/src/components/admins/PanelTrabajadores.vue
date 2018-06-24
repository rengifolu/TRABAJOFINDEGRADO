<template>
  <div class="app">
  <div class="container">
    <div class="list__filter sticky">
      <form action="" class="form-inline">
        <label for="">
        Title:
        </label>
        <select class="form-control mx-0 mx-sm-3" v-model="filter.title">
        <option :value="k" v-for="k in filter.keys"> {{ k | capitalize }}</option>
      </select>
      </form>
    </div>

    <div class="list__results">
      <transition-group name="fade" tag="div" class="row" v-bind:css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave">
        <article class="list__item col-sm-6 col-lg-4 col-xl-3 align-middle" v-for="(person, index) in filteredList" :key="index" :data-index="index">
          <div>
            {{ person.name.title | capitalize }} {{ person.name.first | capitalize }} {{ person.name.last | capitalize }}
          </div>
        </article>
      </transition-group>
    </div>
  </div>
</div>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      empleados: null,
      people: [],
      numPeople: 20,
      filter: {
        nat: '',
        title: 'all',
        keys: ['all']
      },
      animation: {
        delay: 50
      }
    }
  },
  computed: {
    filteredList () {
      var vm = this
      return vm.people.filter(item => {
        if (vm.filter.title === 'all') {
          return item
        } else {
          return item.name.title.toLowerCase() === vm.filter.title.toLowerCase().trim()
        }
      })
    }
  },
  filters: {
    capitalize (string) {
      return string[0].toUpperCase() + string.slice(1)
    }
  },
  methods: {
    getPeople () {
      const vm = this
      this.http.get('https://randomuser.me/api/?results=' + this.numPeople + '&inc=id,location,nat,name,picture')
        .done(function (response) {
          // Save results
          vm.people = response.results

          // Create titles key array
          vm.people.forEach((item, index) => {
            if (vm.filter.keys.indexOf(vm.people[index].name.title) === -1) {
              vm.filter.keys.push(item.name.title)
            }
          })
        })
    },
    checkProp (obj, prop) {
      return obj[prop].toLowerCase() !== this.filter[prop].toLowerCase().trim()
    },
    beforeEnter (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter (el, done) {
      var delay = el.dataset.index * this.animation.delay
      setTimeout(function () {
        // Velocity(el, { opacity: 1, height: '200px' }, { complete: done })
      }, delay)
    },
    leave (el, done) {
      var delay = el.dataset.index * this.animation.delay
      setTimeout(function () {
        // Velocity(el, { opacity: 0, height: 0 }, { complete: done })
      }, delay)
    }
  },
  async mounted () {
    this.getPeople();
    var stickyElements = this.$el.querySelector('.sticky')

    for (var i = stickyElements.length - 1; i >= 0; i--) {
      Stickyfill.add(stickyElements[i])
    }
    this.empleados = (await AuthenticationService.empleados()).data
    console.log(this.empleados)
  }
}
</script>


<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js');
  .list {

  &__filter {
    padding-top: 15px;
    padding-bottom: 10px;
    position: sticky;
    top: 0;
    background: white;
    z-index: 10;
    border-bottom: 2px solid;
    margin-bottom: 20px;
  }

    &__item {
        margin-bottom: 30px;

        div {
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #eee;
            background-clip: content-box;
            border-left: 5px solid #ddd;
            height: 100%;
        }
    }

}
</style>
