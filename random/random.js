$(document).ready(function(){

  var $randomnbr = $('.nbr');
  var $timer= 10;
  var $it;
  var $data = 0;
  var index;
  var change;
  var letters = ["I", "A", "M", " ", "4", "s", "S", "t", "y", "l", "Z"];

  /**
   * Function to determine a maximum number of loop different for each .nbr
   * items.
   *
   * @return {void}
   */
  $randomnbr.each(function(){

    change = Math.round(Math.random()*100);
    $(this).attr('data-change', change);

  });

  /**
   * Get Random numbers between 0-9.
   *
   * @return {int} random numbers
   */
  function random(){
    return Math.round(Math.random()*9);
  };

  /**
   * Randomly select a character
   *
   * @return {int} Location of the character
   */
  function select(){
    /*console.log('pomme');
    console.log('.nbr.length = ');
    console.log($randomnbr.length);*/

    return Math.round(Math.random()*$randomnbr.length+1);
  };

  /**
   * [value description]
   *
   * @return {[type]} [description]
   */
  function value(){
    $('.nbr:nth-child('+select()+')').html(''+random()+'');
    $('.nbr:nth-child('+select()+')').attr('data-number', $data);
    $data++;

    // Iterate on each .nbr items.
    $randomnbr.each(function(){

        // If we reach the randomize higher number of the .nbr items, then
        // we stop incrementing by removing the .nbr class on it.
        if( parseInt($(this).attr('data-number'))
          >= parseInt($(this).attr('data-change'))
        ){
          index = $('.ltr').index(this);
          $(this).html(letters[index]);
          $(this).removeClass('nbr');
        }
    });

  };

  $it = setInterval(value, $timer);

});
