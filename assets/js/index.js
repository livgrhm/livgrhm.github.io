var skills_array = [
    {text: 'PHP', weight: 11},
    {text: 'Zend', weight: 10},
    {text: 'SQL', weight: 9},
    {text: 'HTML', weight: 8},
    {text: 'CSS', weight: 8},
    {text: 'JavaScript', weight: 7},
    {text: 'PrototypeJS', weight: 6},
    {text: 'JQuery', weight: 6},
    {text: 'AJAX', weight: 7},
    {text: 'Git', weight: 6},
    {text: 'SVN', weight: 6},
    {text: 'Unix', weight: 5},
    {text: 'Bootstrap', weight: 4},
    {text: 'Wordpress', weight: 4},
    {text: 'CodeIgniter', weight: 4},
    {text: 'Jekyll', weight: 4},
    {text: 'Siteleaf', weight: 4},
    {text: 'LaTeX', weight: 3},
    {text: 'Java', weight: 3},
    {text: 'C++', weight: 3},
    {text: 'Haskell', weight: 3}
//    {text: "Ipsum", weight: 9, link: "http://jquery.com/"},
//    {text: "Dolor", weight: 6, html: {title: "I can haz any html attribute"}},
];

$(function() {
    // When DOM is ready, select the container element and call the jQCloud method,
    // passing the array of words as the first argument.
    $("#skills-cloud").jQCloud(skills_array);
});