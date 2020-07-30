Vue.component('comp-child', {
        template: '<div class="comp-child">\
                    <slot text="Hello!"></slot>\
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