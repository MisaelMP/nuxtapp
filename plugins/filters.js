import Vue from 'vue'

Vue.filter('capitalise', function(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter('snippet', function(value) {
    return value.slice(0, 100) + '...';
});