let month =['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
let day =['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32'];
let year =['03', '04', '05', '06', '07', '08', '09'];
let code = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let inital = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function crackUser(){
    let user = [null, null, null, null, null, null, null, null, null, "@student.guhsdaz.org"];
    for(let i=0; i<user.length; i++){
        for(let d=0; d<user.length; d++){
            for(let r=0; r<user.length; r++){
                for(let w=0; w<user.length; w++){
                    for(let j=0; j<user.length; j++){
                        for(let a=0; a<user.length; a++){
                            for(let b=0; b<user.length; b++){
                                for(let l=0; l<user.length; l++){
                                    for(let t=0; t<user.length; t++){
                                        user[0] = code[i];
                                        user[1] = code[d];
                                        user[2] = code[r];
                                        user[3] = code[w];
                                        user[4] = code[j];
                                        user[5] = code[a];
                                        user[6] = code[b];
                                        user[7] = code[l];
                                        user[8] = code[t];
                                        let userName =user[0]+user[1]+user[3]+user[4]+user[5]+user[6]+user[7]+user[8]+user[9];
                                        let password =[null, null, null, null];
                                        for(let first=0; first<inital.length; first++){
                                            for(let second=0; second<inital.length; second++){
                                                for(let i=0; i<year.length; i++){
                                                for(let x=0; x<month.length; x++){
                                                        for(let y=0; y<day.length; y++){
                                                            password[0]=inital[first]+inital[second]
                                                            password[1] = month[x];
                                                            password[2] = day[y];
                                                            password[3] = year[i];
                                                            let pass = password[0]+password[1]+password[2]+password[3]
                                                            console.log(userName);
                                                            console.log(pass);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
// crackUser(); 

// function open(){
//     window.open("https://studentvue.guhsdaz.org/", '_blank', "popup");
// }