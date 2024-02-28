const prompt = require ("prompt-sync") ();
console.log("***CHÀO BẠN ĐẾN VỚI VƯỜN TRÒ CHƠI***");
let list = ["Lucky Number", "lucky number", "Word Arrangement", "word arrangement", 
"find the missing number", "Find the missing number", "Keo bua bao", "keo bua bao"];
let d = prompt("Chọn trò chơi mà bạn muốn tham gia: ");
if(d == list[0] || d == list[1]) {
    console.log("Game: Lucky Number");
    let a = parseFloat(prompt("Nhập số may mắn (số có 4 chữ số): "));
    let lucky_number = Math.floor(Math.random()*9000) + 1000;
    let c = 1;
    while(a < 1000 || a > 10000) {
        console.log("Vui lòng nhập lại số may mắn.");
        a = parseFloat(prompt("Nhập số may mắn (số có 4 chữ số): "));
    };
    if(a > 1000 && a < 9999) {
        if (a == lucky_number) {
            console.log("Số may mắn hôm nay là: " + lucky_number);
            console.log("Chúc mừng bạn đã trúng giải.");
        } else {
            console.log("Số may mắn hôm nay là: " + lucky_number);
            console.log("Chúc ban may mắn lần sau.");
        };
    };
    while(c==1) {
        let b = prompt("Bạn có muốn chơi lại không? (Có/Không): ");
        let list = ["Co", "co", "Khong", "khong"];
        lucky_number = Math.floor(Math.random()*9000) + 1000;
        if(b == list[0] || b == list[1]) {
            a = parseFloat(prompt("Nhập số may mắn (số có 4 chữ số): "));
        while(a < 1000 || a > 10000) {
            console.log("Vui lòng nhập lại số may mắn.");
            a = parseFloat(prompt("Nhập số may mắn (số có 4 chữ số): "));
        };
        if(a > 1000 && a < 9999) {
            if (a == lucky_number) {
                console.log("Số may mắn hôm nay là: " + lucky_number);
                console.log("Chúc mừng bạn đã trúng giải.");
            } else {
                console.log("Số may mắn hôm nay là: " + lucky_number);
                console.log("Chúc ban may mắn lần sau.");
            };
        };
    } else if(b == list[2,3]) {
        console.log("Cảm ơn bạn đã tham gia trò chơi.");
        c++;
        };
    };    
} else if(d == list[2] || d == list[3]) {
    let d = 1;
    console.log("Game: Word Arrangement");
    console.log("Câu 1: n/á/t/o/i/ô/g");
    let e = prompt("Nhập câu trả lời của bạn: ");
    var result_game2 = function (e) {
        let list = ["Ton giao", "ton giao"];
        let mess = [];
        let result = [list, mess];
        if(e == list[0] || e == list[1]) {
            mess.push("Chúc mừng bạn đã trả lời chính xác.");
            console.log(mess[0]);
        } else {
            mess.push("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
            console.log(mess[0]);
        }
        return result;
    }
    var result = result_game2(e);

    console.log("Câu 2: g/á/n/b/đ/ó");
    let f = prompt("Nhập câu trả lời của bạn: ");
    var result1_game2 = function (f) {
        let list = ["Bong da", "bong da"];
        let mess = [];
        let result = [list, mess];
        if(f == list[0] || f == list[1]) {
            mess.push("Chúc mừng bạn đã trả lời chính xác.");
            console.log(mess[0]);
        } else {
            mess.push("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
            console.log(mess[0]);
        }
        return result;
    }
    var result1 = result1_game2(f);

    console.log("Câu 3: c/ọ/n/h/ă/v");
    let g = prompt("Nhập câu trả lời của bạn: ");
    var result2_game2 = function (g) {
        let list = ["Van hoc", "van hoc"];
        let mess = [];
        let result = [list, mess];
        if(g == list[0] || g == list[1]) {
            mess.push("Chúc mừng bạn đã trả lời chính xác.");
            console.log(mess[0]);
        } else {
            mess.push("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
            console.log(mess[0]);
        }
        return result;
    }
    var result2 = result2_game2(g);

    console.log("Câu 4: n/đ/ồ/i/g/ọ/n");
    let h = prompt("Nhập câu trả lời của bạn: ");
    var result3_game2 = function (h) {
        let list = ["Ngon doi", "ngon doi"];
        let mess = [];
        let result = [list, mess];
        if(h == list[0] || h == list[1]) {
            mess.push("Chúc mừng bạn đã trả lời chính xác.");
            console.log(mess[0]);
        } else {
            mess.push("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
            console.log(mess[0]);
        }
        return result;
    }
    var result3 = result3_game2(h);

    console.log("Câu 5: g/ũ/u/g/t/l/h/n/n");
    let i = prompt("Nhập câu trả lời của bạn: ");
    var result4_game2 = function (i) {
        let list = ["Thung lung", "thung lung"];
        let mess = [];
        let result = [list, mess];
        if(i == list[0] || i == list[1]) {
            mess.push("Chúc mừng bạn đã trả lời chính xác.");
            console.log(mess[0]);
        } else {
            mess.push("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
            console.log(mess[0]);
        }
        return result;
    }
    var result4 = result4_game2(i);
    while(d==1) {
        let b = prompt("Bạn có muốn chơi lại không? (Có/Không): ");
        let list = ["Co", "co", "Khong", "khong"];
        if (b == list[0] || b == list[1]) {
            console.log("Game: Word Arrangement");
        console.log("Câu 1: n/á/t/o/i/ô/g");
        let e = prompt("Nhập câu trả lời của bạn: ");
        var result_game2 = function (e) {
            let list = ["Ton giao", "ton giao"];
            let mess = [];
            let result = [list, mess];
            if (e == list[0] || e == list[1]) {
                mess.push("Chúc mừng bạn đã trả lời chính xác.");
                console.log(mess[0]);
            } else {
                mess.push("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
                console.log(mess[0]);
            }
            return result;
        }
        var result = result_game2(e);
    
        console.log("Câu 2: g/á/n/b/đ/ó");
        let f = prompt("Nhập câu trả lời của bạn: ");
        var result1_game2 = function (f) {
            let list = ["Bong da", "bong da"];
            let mess = [];
            let result = [list, mess];
            if(f == list[0] || f == list[1]) {
                mess.push("Chúc mừng bạn đã trả lời chính xác.");
                console.log(mess[0]);
            } else {
                mess.push("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
                console.log(mess[0]);
            }
            return result;
        }
        var result1 = result1_game2(f);
    
        console.log("Câu 3: c/ọ/n/h/ă/v");
        let g = prompt("Nhập câu trả lời của bạn: ");
        var result2_game2 = function (g) {
            let list = ["Van hoc", "van hoc"];
            let mess = [];
            let result = [list, mess];
            if(g == list[0] || g == list[1]) {
                mess.push("Chúc mừng bạn đã trả lời chính xác.");
                console.log(mess[0]);
            } else {
                mess.push("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
                console.log(mess[0]);
            }
            return result;
        }
        var result2 = result2_game2(g);
    
        console.log("Câu 4: n/đ/ồ/i/g/ọ/n");
        let h = prompt("Nhập câu trả lời của bạn: ");
        var result3_game2 = function (h) {
            let list = ["Ngon doi", "ngon doi"];
            let mess = [];
            let result = [list, mess];
            if(h == list[0] || h == list[1]) {
                mess.push("Chúc mừng bạn đã trả lời chính xác.");
                console.log(mess[0]);
            } else {
                mess.push("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
                console.log(mess[0]);
            }
            return result;
        }
        var result3 = result3_game2(h);
    
        console.log("Câu 5: g/ũ/u/g/t/l/h/n/n");
        let i = prompt("Nhập câu trả lời của bạn: ");
        var result4_game2 = function (i) {
            let list = ["Thung lung", "thung lung"];
            let mess = [];
            let result = [list, mess];
            if(i == list[0] || i == list[1]) {
                mess.push("Chúc mừng bạn đã trả lời chính xác.");
                console.log(mess[0]);
            } else {
                mess.push("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
                console.log(mess[0]);
            }
            return result;
        }
        var result4 = result4_game2(i);
    } else if(b == list[2] || b == list[3]) {
        console.log("Cảm ơn bạn đã tham gia trò chơi.");
        d++;
    }
}
} else if(d == list[4] || d == list[5]) {
    let check = 1;
    console.log("Game: Find the missing number");
    console.log("Câu 1: 2/4/.../8/10");
    let a = prompt ("Nhập đáp án của bạn: ");
    if(a == 6) {
        console.log("Chúc mừng bạn đã trả lời đúng.");
    } else {
        console.log("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
    }

    console.log("Câu 2: 3/5/.../9/11");
    let b = prompt ("Nhập đáp án của bạn: ");
    if(b == 7) {
        console.log("Chúc mừng bạn đã trả lời đúng.");
    } else {
        console.log("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
    }

    console.log("Câu 3: 3/9/27/.../243");
    let c = prompt ("Nhập đáp án của bạn: ");
    if(c == 81) {
        console.log("Chúc mừng bạn đã trả lời đúng.");
    } else {
        console.log("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
    }

    console.log("Câu 4: 3/4/7/11/.../19");
    let d = prompt ("Nhập đáp án của bạn: ");
    if(d == 18) {
        console.log("Chúc mừng bạn đã trả lời đúng.");
    } else {
        console.log("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
    }

    console.log("Câu 5: 3/8/23/68/.../608");
    let e = prompt("Nhập đáp án của bạn: ");
    if(e == 203) {
        console.log("Chúc mừng bạn đã trả lời đúng.");
    } else {
        console.log("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
    }

    while(check == 1) {
        let b = prompt("Bạn có muốn chơi lại không? (Có/Không): ");
        let list = ["Co", "co", "Khong", "khong"];
        if(b == list[0] || b == list[1]) {
            console.log("Game: Find the missing number");
            console.log("Câu 1: 2/4/.../8/10");
            let a = prompt ("Nhập đáp án của bạn: ");
            if(a == 6) {
                console.log("Chúc mừng bạn đã trả lời đúng.");
            } else {
                console.log("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
            }
        
            console.log("Câu 2: 3/5/.../9/11");
            let b = prompt ("Nhập đáp án của bạn: ");
            if(b == 7) {
                console.log("Chúc mừng bạn đã trả lời đúng.");
            } else {
                console.log("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
            }
        
            console.log("Câu 3: 3/9/27/.../243");
            let c = prompt ("Nhập đáp án của bạn: ");
            if(c == 81) {
                console.log("Chúc mừng bạn đã trả lời đúng.");
            } else {
                console.log("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
            }
        
            console.log("Câu 4: 3/4/7/11/.../19");
            let d = prompt ("Nhập đáp án của bạn: ");
            if(d == 18) {
                console.log("Chúc mừng bạn đã trả lời đúng.");
            } else {
                console.log("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
            }
        
            console.log("Câu 5: 3/8/23/68/.../608");
            let e = prompt ("Nhập đáp án của bạn: ");
            if(e == 203) {
                console.log("Chúc mừng bạn đã trả lời đúng.");
            } else {
                console.log("Câu trả lời của bạn không chính xác. Hãy cố gắng vào những câu tiếp theo.");
            }
        } else if(b == list[2] || b == list[3]) {
            console.log("Cảm ơn bạn đã tham gia trò chơi.");
            check++;
        }
    }    
} else if(d == list[6] || d == list[7]) {
    let check1 = 1;
    console.log("Game: Rock-Paper-Scissors");
    let a = prompt("Nhập hành động của bạn: ");
    let list_check = ["Keo", "keo", "Bua", "bua", "bao", "Bao"];
    let list_random =list_check[Math.floor(Math.random()*6)];
    let option1 = ["Keo", "keo", "Bua", "bua"];//thua
    let option2 = ["Keo", "keo", "Bao", "bao"];//thắng
    let option3 = ["Bua", "bua", "Keo", "keo"];//thắng
    let option4 = ["Bua", "bua", "Bao", "bao"];//thua
    let option5 = ["Bao", "bao", "Keo", "keo"];//thua
    let option6 = ["Bao", "bao", "Bua", "bua"];//thắng
    let option7 = ["keo", "Keo"];//hòa
    let option8 = ["bua", "Bua"];//hòa
    let option9 = ["bao", "Bao"];//hòa
    let option10 = ["Keo", "keo"];//hòa
    let option11 = ["Bua", "bua"];//hòa
    let option12 = ["Bao", "bao"];//hòa
    if(a == list_random) {
        console.log("Hành động của trò chơi là: " + list_random);
        console.log("Cả 2 hòa nhau.");
    } else if((a == option1[0] || a == option1[1]) && 
    (list_random == option1[2] || list_random == option1[3])) {
        console.log("Hành động của trò chơi: Bua");
        console.log("Bạn là người thua cuộc.");
    } else if((a == option2[0] || a == option2[1]) && 
    (list_random == option2[2] || list_random == option2[3])) {
        console.log("Hành động của trò chơi: Bao");
        console.log("Bạn là người thắng cuộc.");
    } else if((a == option3[0] || a == option3[1]) && 
    (list_random == option3[2] || list_random == option3[3])) {
        console.log("Hành động của trò chơi: Keo");
        console.log("Bạn là người thắng cuộc.");
    } else if((a == option4[0] || a == option4[1]) && 
    (list_random == option4[2] || list_random == option4[3])) {
        console.log("Hành động của trò chơi: Bao");
        console.log("Bạn là người thua cuộc.");
    } else if((a == option5[0] || a == option5[1]) && 
    (list_random == option5[2] || list_random == option5[3])) {
        console.log("Hành động của trò chơi: Keo");
        console.log("Bạn là người thua cuộc.");
    } else if((a == option6[0] || a == option6[1]) && 
    (list_random == option6[2] || list_random == option6[3])) {
        console.log("Hành động của trò chơi: Bua");
        console.log("Bạn là người thắng cuộc.");
    } else if ( a == option7[0] && list_random == option7[1]) {
        console.log("Hành động của trò chơi: Keo");
        console.log("Cả 2 hòa nhau.");
    } else if (a == option8[0] && list_random == option8[1]) {
        console.log("Hành động của trò chơi: Bua");
        console.log("Cả 2 hòa nhau.");
    }else if (a == option9[0] && list_random == option9[1]) {
        console.log("Hành động của trò chơi: Bao");
        console.log("Cả 2 hòa nhau.");
    }else if (a == option10[0] && list_random == option10[1]) {
        console.log("Hành động của trò chơi: Keo");
        console.log("Cả 2 hòa nhau.");
    }else if (a == option11[0] && list_random == option11[1]) {
        console.log("Hành động của trò chơi: Bua");
        console.log("Cả 2 hòa nhau.");
    }else if (a == option12[0] && list_random == option12[1]) {
        console.log("Hành động của trò chơi: Bao");
        console.log("Cả 2 hòa nhau.");
    }
    while(check1==1) {
        let b = prompt("Bạn có muốn chơi lại không? (Có/Không): ");
        let list = ["Co", "co", "Khong", "khong"];
        if(b == list[0] || b == list[1]) {
            let a = prompt("Nhập hành động của bạn: ");
            let list_check = ["Keo", "keo", "Bua", "bua", "bao", "Bao"];
            let list_random = list_check[Math.floor(Math.random()*6)];
            let option1 = ["Keo", "keo", "Bua", "bua"];//thua
            let option2 = ["Keo", "keo", "Bao", "bao"];//thắng
            let option3 = ["Bua", "bua", "Keo", "keo"];//thắng
            let option4 = ["Bua", "bua", "Bao", "bao"];//thua
            let option5 = ["Bao", "bao", "Keo", "keo"];//thua
            let option6 = ["Bao", "bao", "Bua", "bua"];//thắng
            let option7 = ["keo", "Keo"];//hòa
            let option8 = ["bua", "Bua"];//hòa
            let option9 = ["bao", "Bao"];//hòa
            let option10 = ["Keo", "keo"];//hòa
            let option11 = ["Bua", "bua"];//hòa
            let option12 = ["Bao", "bao"];//hòa
            if(a == list_random) {
                console.log("Hành động của trò chơi là: " + list_random);
                console.log("Cả 2 hòa nhau.");
            } else if((a == option1[0] || a == option1[1]) && 
            (list_random == option1[2] || list_random == option1[3])) {
                console.log("Hành động của trò chơi: Bua");
                console.log("Bạn là người thua cuộc.");
            } else if((a == option2[0] || a == option2[1]) && 
            (list_random == option2[2] || list_random == option2[3])) {
                console.log("Hành động của trò chơi: Bao");
                console.log("Bạn là người thắng cuộc.");
            } else if((a == option3[0] || a == option3[1]) && 
            (list_random == option3[2] || list_random == option3[3])) {
                console.log("Hành động của trò chơi: Keo");
                console.log("Bạn là người thắng cuộc.");
            } else if((a == option4[0] || a == option4[1]) && 
            (list_random == option4[2] || list_random == option4[3])) {
                console.log("Hành động của trò chơi: Bao");
                console.log("Bạn là người thua cuộc.");
            } else if((a == option5[0] || a == option5[1]) && 
            (list_random == option5[2] || list_random == option5[3])) {
                console.log("Hành động của trò chơi: Keo");
                console.log("Bạn là người thua cuộc.");
            } else if((a == option6[0] || a == option6[1]) && 
            (list_random == option6[2] || list_random == option6[3])) {
                console.log("Hành động của trò chơi: Bua");
                console.log("Bạn là người thắng cuộc.");
            }  else if ( a == option7[0] && list_random == option7[1]) {
                console.log("Hành động của trò chơi: Keo");
                console.log("Cả 2 hòa nhau.");
            } else if (a == option8[0] && list_random == option8[1]) {
                console.log("Hành động của trò chơi: Bua");
                console.log("Cả 2 hòa nhau.");
            }else if (a == option9[0] && list_random == option9[1]) {
                console.log("Hành động của trò chơi: Bao");
                console.log("Cả 2 hòa nhau.");
            }else if (a == option10[0] && list_random == option10[1]) {
                console.log("Hành động của trò chơi: Keo");
                console.log("Cả 2 hòa nhau.");
            }else if (a == option11[0] && list_random == option11[1]) {
                console.log("Hành động của trò chơi: Bua");
                console.log("Cả 2 hòa nhau.");
            }else if (a == option12[0] && list_random == option12[1]) {
                console.log("Hành động của trò chơi: Bao");
                console.log("Cả 2 hòa nhau.");
            }
    } else if(b == list[2] || b == list[3]) {
        console.log("Cảm ơn bạn đã tham gia trò chơi.");
        check1++;
        }
    }
}
