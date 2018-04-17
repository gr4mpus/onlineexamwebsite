let studentData = [];
let studentDetails;
$(document).ready(function(){
    studentDetails = $('#studentDetails');
    let studentName = $('#studentName');
    let loginId = $('#loginId');
    let password = $('#password');
    let addBtn = $('#addBtn');
    let doneBtn = $('#doneBtn');
    addBtn.click(function(){
        console.log("Add");
        if((studentName.val()&&loginId.val()&&password.val())===''){
            alert("Please Fill All Details");
            return null;
        }

        studentData.push({
            sName:studentName.val(),
            lId:loginId.val(),
            pwd:password.val()
        });

        studentName.val('');
        loginId.val('');
        password.val('');

        studentDetails.empty();
        for(let i in studentData){
            let tempDataList=createContent(i);
            studentDetails.append(tempDataList);
        }


    })
    doneBtn.click(function(){
        console.log("Done")
    })


})

function createContent(i){
    let nameList = $('<li class="mt-4 mb-4 "></li>');

    let dataRow = $('<div class="row"></div>');

    let nameData = $(`<div class="col-3 alert alert-success">${studentData[i].sName}</div>`);
    let loginIdData = $(`<div class="col-3 alert alert-danger">${studentData[i].lId}</div>`);
    let passwordData = $(`<div class="col-3 alert alert-info">${studentData[i].pwd}</div>`);


    dataRow.append(nameData).append(loginIdData).append(passwordData);

    nameList.append(dataRow)
    return nameList;
}