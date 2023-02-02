//Get UI
const  getcheckbox = document.getElementById('toggle-checkbox');
const getchecklabel = document.getElementById('toggle-label');
const getbasic = document.getElementById('basic'),
     getprof = document.getElementById('prof'),
     getmst = document.getElementById('mst');
     console.log(getbasic,getprof,getmst,getcheckbox,getchecklabel);



     getchecklabel.addEventListener('click',function(){
        // console.log('i am working');

        if(getcheckbox.checked){
            // console.log('yes');
            getbasic.textContent = 10;
            getprof.textContent = 20;
            getmst.textContent = 30;
        }else{
            // console.log('no');
            [getbasic.textContent,getprof.textContent,getmst.textContent] = [120,240,360];
        }
     });