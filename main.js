let month = ['01', 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12];
let day = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
let year = [03, 04, 05, 06, 07, 08, 09];


function crack(){
    let password =[null, "/", null, "/", null];
    for(let i=0; i<year.length; i++){
        for(let x=0; x<month.length; x++){
            for(let y=0; y<day.length; y++){
             password[0] = month[x];
             password[2] = day[y];
             password[4] = year[i];
             console.log(password);
            }
        }
    }
}

crack();