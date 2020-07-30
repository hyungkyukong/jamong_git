Vue.component('comp-child', {
        template: '<div class="comp-child">\
                    <slot text="Hello!">이런식으로 하는구나!!</slot>\
                  </div>       ',
        data: {
            message: 'childMsg1'
        }

    },

)
 
new Vue({
    el: '#app',
    data: {
        parentsData: '<부모의 데이터>'
    },
    methods: {
        parentMethod: function(childArg, parentArg) {
            alert('testingkong');
        }
    },
    data: {
        message: 'ParentMsg'
    }
})