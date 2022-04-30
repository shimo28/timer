window.addEventListener('load', function(){

  const sound = document.querySelector("#sound");
  const start = document.querySelector("#start");
  const stop = document.querySelector("#stop");
  const reset = document.querySelector("#reset");
  const count = 1000;
  const time = 1500;
  let set_id;
  let timer = time;
  let counter = 0;
  let min;
  let sec;

  min = Math.floor(timer / 60);
  sec = timer % 60;
  deg = 360*counter/time;
  $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
  $('.ppc-percents span').html(min +":" + ("0"+sec).slice(-2));
  stop.style.display ="none";
  reset.style.display ="none";


  start.addEventListener('click',count_start, false);
  function count_start(){
    start.style.display ="none";
    if(start.style.display=="block"){
      stop.style.display ="none";
      reset.style.display ="none";
    }else{
      stop.style.display ="block";
      reset.style.display ="block";
    }
    set_id =setInterval(count_down,count);
    function count_down(){
      if(timer <= 0 ){
        sound.play();
        sound.volume = 1;
        clearInterval(set_id);
      }else{
        timer--;
        counter++;
      }
      min = Math.floor(timer / 60);
      sec = timer % 60;
      $(function(){
        let $ppc = $('.progress-pie-chart');
        deg = 360*counter/time;
        if (counter > time/2){
          $ppc.addClass('gt-50');
        }
        $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
        $('.ppc-percents span').html(min +":" + ("0"+sec).slice(-2));
      });
    }
  }

  stop.addEventListener("click",count_stop, false);
  function count_stop(){
    clearInterval(set_id);
    start.disabled = false;
  }

  reset.addEventListener("click",count_reset,false);
  function count_reset(){
    clearInterval(set_id);
    window.location.reload();
    window.addEventListener('load', function () {
      setTimeout(doReload, 5000);
    });
  }
  

});