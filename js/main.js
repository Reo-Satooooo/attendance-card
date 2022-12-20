window.onload = function () {
  
  // カード生成用
  const canvas001 = document.getElementById("canvas001");
  // canvas要素に対応しているブラウザのみif文内の処理を実行する
  // canvas要素に対応していないブラウザでは代替テキストを表示する
  if (canvas001.getContext) {
    // カード
    const contextCard = canvas001.getContext("2d");
    // 枠線
    const contextLine = canvas001.getContext("2d");
    // 文字
    const contextCardName = canvas001.getContext("2d");
    const contextDate = canvas001.getContext("2d");
    const contextSubjectName = canvas001.getContext("2d");
    const contextTeacherName = canvas001.getContext("2d");
    const contextCourseName = canvas001.getContext("2d");
    const contextCourseList = canvas001.getContext("2d");
    const contextSchoolYear = canvas001.getContext("2d");
    const contextClass = canvas001.getContext("2d");
    const contextAttendance = canvas001.getContext("2d");
    const contextStudentNumber = canvas001.getContext("2d");
    const contextStudentName = canvas001.getContext("2d");
    const contextUniversityName = canvas001.getContext("2d");

    // 背景色指定（背景色変更ができればなおよし）
    contextCard.fillStyle = "#FFFACD";
    // カードサイズ
    contextCard.rect(0, 0, 480, 240);
    contextCard.fill();
    // 外枠
    contextLine.rect(20, 50, 440, 160);
    // 横線（上から順に）
    contextLine.moveTo(20, 90);
    contextLine.lineTo(460, 90);
    contextLine.moveTo(220, 130);
    contextLine.lineTo(460, 130);
    contextLine.moveTo(20, 150);
    contextLine.lineTo(220, 150);
    contextLine.moveTo(220, 170);
    contextLine.lineTo(460, 170);
    // 縦線（左から順に）
    contextLine.moveTo(60, 50);
    contextLine.lineTo(60, 210);
    contextLine.moveTo(220, 50);
    contextLine.lineTo(220, 210);
    contextLine.moveTo(260, 50);
    contextLine.lineTo(260, 210);
    contextLine.moveTo(300, 90);
    contextLine.lineTo(300, 130);
    contextLine.moveTo(327, 50);
    contextLine.lineTo(327, 90);
    contextLine.moveTo(340, 90);
    contextLine.lineTo(340, 130);
    contextLine.moveTo(380, 90);
    contextLine.lineTo(380, 130);
    contextLine.moveTo(393, 50);
    contextLine.lineTo(393, 90);
    contextLine.moveTo(420, 90);
    contextLine.lineTo(420, 130);

    // 描画
    contextLine.closePath();
    contextLine.stroke();

    // 点線
    contextLine.beginPath();
    contextLine.setLineDash([10, 5]);
    contextLine.moveTo(260, 70);
    contextLine.lineTo(460, 70);
    contextLine.stroke();

    // 文字（出席カード）
    contextCardName.fillStyle = '#000000';
    contextCardName.font = '16pt sans-serif';
    contextCardName.fillText('出　席　カ　ー　ド',145,40);

    // 文字（日時）
    contextDate.fillStyle = '#000000';
    contextDate.font = '9pt sans-serif';
    contextDate.fillText('日　時',22,75);

    // 文字（科目名）
    contextSubjectName.fillStyle = '#000000';
    contextSubjectName.font = '9pt sans-serif';
    contextSubjectName.fillText('科目名',22,125);

    // 文字（教員名）
    contextTeacherName.fillStyle = '#000000';
    contextTeacherName.font = '9pt sans-serif';
    contextTeacherName.fillText('教員名',22,185);

    // 文字（学科名）
    contextCourseName.fillStyle = '#000000';
    contextCourseName.font = '9pt sans-serif';
    contextCourseName.fillText('学科名',222,75);

    // 文字（学科一覧）
    contextCourseList.fillStyle = '#000000';
    contextCourseList.font = '5.3pt sans-serif';
    contextCourseList.fillText('バイオ・マテリアル',262,63);
    contextCourseList.fillText('光システム',342,63);
    contextCourseList.fillText('GSD',417,63);
    contextCourseList.fillText('応用化学生物',272,83);
    contextCourseList.fillText('電子光工',345,83);
    contextCourseList.fillText('情報システム工',402,83);

    // 文字（学年）
    contextSchoolYear.fillStyle = '#000000';
    contextSchoolYear.font = '9pt sans-serif';
    contextSchoolYear.fillText('学　年',222,115);

    // 文字（クラス）
    contextClass.fillStyle = '#000000';
    contextClass.font = '9pt sans-serif';
    contextClass.fillText('クラス',302,115);

    // 文字（出席）
    contextAttendance.fillStyle = '#000000';
    contextAttendance.font = '9pt sans-serif';
    contextAttendance.fillText('出　席',382,115);

    // 文字（学籍番号）
    contextStudentNumber.fillStyle = '#000000';
    contextStudentNumber.font = '9pt sans-serif';
    contextStudentNumber.fillText('学　籍',222,147);
    contextStudentNumber.fillText('番　号',222,163);

    // 文字（氏名）
    contextStudentName.fillStyle = '#000000';
    contextStudentName.font = '9pt sans-serif';
    contextStudentName.fillText('氏　名',222,195);

    // 文字（公立千歳科学技術大学）
    contextUniversityName.fillStyle = '#000000';
    contextUniversityName.font = '8pt sans-serif';
    contextUniversityName.fillText('公　立　千　歳　科　学　技　術　大　学',140,225);

  }

  // 日時欄入力
  let inputDateValue = document.getElementById('input-date');
  inputDateValue.addEventListener('input',inputDateChange);

  // 科目欄入力
  let inputSubjectNameValue = document.getElementById('input-subject-name');
  inputSubjectNameValue.addEventListener('input',inputSubjectNameChange);

  // 教員名入力
  let inputTeacherNameValue = document.getElementById('input-teacher-name');
  inputTeacherNameValue.addEventListener('input',inputTeacherNameChange);

  // 学科名選択
  let inputCourseNameValue = document.getElementById('input-course-name');
  inputCourseNameValue.addEventListener('change',inputCourseNameChange);

  // 学年選択
  let inputSchoolYearValue = document.getElementById('school-year');
  inputSchoolYearValue.addEventListener('change',inputSchoolYearChange);

  // クラス選択
  let inputSchoolClassValue = document.getElementById('school-class');
  inputSchoolClassValue.addEventListener('change',inputSchoolClassChange);

  // 出席番号
  let inputAttendanceNumberValue = document.getElementById("input-attendance-number");
  inputAttendanceNumberValue.addEventListener('input',inputAttendanceNumberChange);

  // 学籍番号
  let inputStudentNumberValue = document.getElementById("input-student-number");
  inputStudentNumberValue.addEventListener('input',inputStudentNumberChange);

  // 氏名
  let inputStudentNameValue = document.getElementById("input-student-name");
  inputStudentNameValue.addEventListener('input',inputStudentNameChange);

  // 入力チェック
  const form = document.getElementById("form");
  const button = document.getElementById("download");
  form.addEventListener("input", update)
  form.addEventListener("change", update)

  // 入力チェック用update関数
  function update() {
    const isRequired = form.checkValidity()

    if (isRequired) {
      button.disabled = false;
      button.style.opacity = 1;
      button:hover.style.opacity = 0.7;
      button.style.cursor = "pointer";
      return
    }
  }

  //ボタン処理
  const downloadButton = document.getElementById("download");
  downloadButton.addEventListener('click',buttonDownload)
  function buttonDownload(){
    const date = localStorage.getItem('date');
    const studentNumber = localStorage.getItem('studentNumber');
    const fileName = ("attendance_card_" + date + "_" + studentNumber);
    const canvasElement = document.getElementById("canvas001");
    var a = document.createElement('a');
    a.href = canvasElement.toDataURL("image/jpeg",0.75);
    a.download = fileName+'.jpg';
    a.click();
  }

};

// 日時レンダリング
function inputDateChange(event){ 
  const dateValue = document.getElementById('input-date');
  localStorage.setItem('date', dateValue.value);
  const canvasCard = document.getElementById("canvas001");
  if (canvasCard.getContext) {
    const contextDateArea = canvasCard.getContext("2d");
    contextDateArea.clearRect(61,51,158,38);
    contextDateArea.fillStyle = '#FFFACD';
    contextDateArea.fillRect(61,51,158,38);
    contextDateArea.fillStyle = '#000000';
    contextDateArea.font = '9pt sans-serif';
    contextDateArea.fillText(event.currentTarget.value,65,75);
  }  
}

// 科目名レンダリング
function inputSubjectNameChange(event){
  const subjectNameValue = document.getElementById('input-subject-name');
  localStorage.setItem('subjectName', subjectNameValue.value);
  const canvasCard = document.getElementById("canvas001");
  if (canvasCard.getContext) {
    const contextSubjectNameArea = canvasCard.getContext("2d");
    contextSubjectNameArea.clearRect(61,91,158,58);
    contextSubjectNameArea.fillStyle = '#FFFACD';
    contextSubjectNameArea.fillRect(61,91,158,58);
    contextSubjectNameArea.fillStyle = '#000000';
    contextSubjectNameArea.font = '9pt sans-serif';
    contextSubjectNameArea.fillText(event.currentTarget.value,65,125);
  }
}

// 教員名レンダリング
function inputTeacherNameChange(event){
  const teacherNameValue = document.getElementById('input-teacher-name');
  localStorage.setItem('teacherName',teacherNameValue.value);
  const canvasCard = document.getElementById("canvas001");
  if (canvasCard.getContext) {
    const contextTeacherNameArea = canvasCard.getContext("2d");
    contextTeacherNameArea.clearRect(61,151,158,58);
    contextTeacherNameArea.fillStyle = '#FFFACD';
    contextTeacherNameArea.fillRect(61,151,158,58);
    contextTeacherNameArea.fillStyle = '#000000';
    contextTeacherNameArea.font = '9pt sans-serif';
    contextTeacherNameArea.fillText(event.currentTarget.value,65,185);
  }
}

// 学科名レンダリング
function inputCourseNameChange(event){
  const courseNameValue = document.getElementById('input-course-name');
  localStorage.setItem('courseName',courseNameValue.value);
  const canvasCard = document.getElementById("canvas001");
  if (canvasCard.getContext) {
    const contextCourseNameArea = canvasCard.getContext("2d");
    
    // 一度全てリセット
    // バイオマテリアル
    contextCourseNameArea.clearRect(261,51,65,18);
    contextCourseNameArea.fillStyle = '#FFFACD';
    contextCourseNameArea.fillRect(261,51,65,18);
    contextCourseNameArea.fillStyle = '#000000';
    contextCourseNameArea.font = '5.3pt sans-serif';
    contextCourseNameArea.fillText('バイオ・マテリアル',262,63);
    // 光システム
    contextCourseNameArea.clearRect(328,51,65,18);
    contextCourseNameArea.fillStyle = '#FFFACD';
    contextCourseNameArea.fillRect(328,51,65,18);
    contextCourseNameArea.fillStyle = '#000000';
    contextCourseNameArea.font = '5.3pt sans-serif';
    contextCourseNameArea.fillText('光システム',342,63);
    // GSD
    contextCourseNameArea.clearRect(394,51,65,18);
    contextCourseNameArea.fillStyle = '#FFFACD';
    contextCourseNameArea.fillRect(394,51,65,18);
    contextCourseNameArea.fillStyle = '#000000';
    contextCourseNameArea.font = '5.3pt sans-serif';
    contextCourseNameArea.fillText('GSD',417,63);
    // 応用化学生物
    contextCourseNameArea.clearRect(261,71,65,18);
    contextCourseNameArea.fillStyle = '#FFFACD';
    contextCourseNameArea.fillRect(261,71,65,18);
    contextCourseNameArea.fillStyle = '#000000';
    contextCourseNameArea.font = '5.3pt sans-serif';
    contextCourseNameArea.fillText('応用化学生物',272,83);
    // 電子光
    contextCourseNameArea.clearRect(328,71,65,18);
    contextCourseNameArea.fillStyle = '#FFFACD';
    contextCourseNameArea.fillRect(328,71,65,18);
    contextCourseNameArea.fillStyle = '#000000';
    contextCourseNameArea.font = '5.3pt sans-serif';
    contextCourseNameArea.fillText('電子光工',345,83);
    // 情シス
    contextCourseNameArea.clearRect(394,71,65,18);
    contextCourseNameArea.fillStyle = '#FFFACD';
    contextCourseNameArea.fillRect(394,71,65,18);
    contextCourseNameArea.fillStyle = '#000000';
    contextCourseNameArea.font = '5.3pt sans-serif';
    contextCourseNameArea.fillText('情報システム工',402,83);

    // 学科毎の分岐でチェックをつける
    if(courseNameValue.value == 'bm'){//バイオマテリアル
      contextCourseNameArea.clearRect(261,51,65,18);
      contextCourseNameArea.fillStyle = '#FFFACD';
      contextCourseNameArea.fillRect(261,51,65,18);
      contextCourseNameArea.fillStyle = '#000000';
      contextCourseNameArea.font = '5.3pt sans-serif';
      contextCourseNameArea.fillText('バイオ・マテリアル',262,63);
      contextCourseNameArea.font = '12pt sans-serif';
      contextCourseNameArea.fillText('◎',287,67);
    }
    else if(courseNameValue.value == 'os'){//光システム
      contextCourseNameArea.clearRect(328,51,65,18);
      contextCourseNameArea.fillStyle = '#FFFACD';
      contextCourseNameArea.fillRect(328,51,65,18);
      contextCourseNameArea.fillStyle = '#000000';
      contextCourseNameArea.font = '5.3pt sans-serif';
      contextCourseNameArea.fillText('光システム',342,63);
      contextCourseNameArea.font = '12pt sans-serif';
      contextCourseNameArea.fillText('◎',352,67);
    }
    else if(courseNameValue.value == 'gsd'){//GSD
      contextCourseNameArea.clearRect(394,51,65,18);
      contextCourseNameArea.fillStyle = '#FFFACD';
      contextCourseNameArea.fillRect(394,51,65,18);
      contextCourseNameArea.fillStyle = '#000000';
      contextCourseNameArea.font = '5.3pt sans-serif';
      contextCourseNameArea.fillText('GSD',417,63);
      contextCourseNameArea.font = '12pt sans-serif';
      contextCourseNameArea.fillText('◎',417,67);
      console.log(courseNameValue.value);
    }
    else if(courseNameValue.value == 'acb'){//応用化学
      contextCourseNameArea.clearRect(261,71,65,18);
      contextCourseNameArea.fillStyle = '#FFFACD';
      contextCourseNameArea.fillRect(261,71,65,18);
      contextCourseNameArea.fillStyle = '#000000';
      contextCourseNameArea.font = '5.3pt sans-serif';
      contextCourseNameArea.fillText('応用化学生物',272,83);
      contextCourseNameArea.font = '12pt sans-serif';
      contextCourseNameArea.fillText('◎',287,87);
      console.log(courseNameValue.value);
    }
    else if(courseNameValue.value == 'oese'){//電子光
      contextCourseNameArea.clearRect(328,71,65,18);
      contextCourseNameArea.fillStyle = '#FFFACD';
      contextCourseNameArea.fillRect(328,71,65,18);
      contextCourseNameArea.fillStyle = '#000000';
      contextCourseNameArea.font = '5.3pt sans-serif';
      contextCourseNameArea.fillText('電子光工',345,83);
      contextCourseNameArea.font = '12pt sans-serif';
      contextCourseNameArea.fillText('◎',352,87);
    }
    else if(courseNameValue.value == 'ise'){//情シス
      contextCourseNameArea.clearRect(394,71,65,18);
      contextCourseNameArea.fillStyle = '#FFFACD';
      contextCourseNameArea.fillRect(394,71,65,18);
      contextCourseNameArea.fillStyle = '#000000';
      contextCourseNameArea.font = '5.3pt sans-serif';
      contextCourseNameArea.fillText('情報システム工',402,83);
      contextCourseNameArea.font = '12pt sans-serif';
      contextCourseNameArea.fillText('◎',417,87);
    }
  }
}

// 学年レンダリング
function inputSchoolYearChange(event){
  const schoolYearValue = document.getElementById('school-year');
  localStorage.setItem('schoolYear',schoolYearValue.value);
  const canvasCard = document.getElementById("canvas001");
  if (canvasCard.getContext) {
    const contextSchoolYearArea = canvasCard.getContext("2d");
    contextSchoolYearArea.clearRect(261,91,38,38);
    contextSchoolYearArea.fillStyle = '#FFFACD';
    contextSchoolYearArea.fillRect(261,91,38,38);
    contextSchoolYearArea.fillStyle = '#000000';
    contextSchoolYearArea.font = '9pt sans-serif';
    contextSchoolYearArea.fillText(event.currentTarget.value,276,115);
  }
}

// クラスレンダリング
function inputSchoolClassChange(event){
  const schoolClassValue = document.getElementById('school-class');
  localStorage.setItem('schoolClass',schoolClassValue.value);
  const canvasCard = document.getElementById("canvas001");
  if (canvasCard.getContext) {
    const contextClassArea = canvasCard.getContext("2d");
    contextClassArea.clearRect(341,91,38,38);
    contextClassArea.fillStyle = '#FFFACD';
    contextClassArea.fillRect(341,91,38,38);
    contextClassArea.fillStyle = '#000000';
    contextClassArea.font = '9pt sans-serif';
    contextClassArea.fillText(event.currentTarget.value,356,115);
  }
}

// 出席番号レンダリング
function inputAttendanceNumberChange(event){
  const attendanceNumberValue = document.getElementById('input-attendance-number');
  localStorage.setItem('attendanceNumber',attendanceNumberValue.value);
  const canvasCard = document.getElementById("canvas001");
  if (canvasCard.getContext) {
    const contextAttendanceNumberArea = canvasCard.getContext("2d");
    contextAttendanceNumberArea.clearRect(421,91,38,38);
    contextAttendanceNumberArea.fillStyle = '#FFFACD';
    contextAttendanceNumberArea.fillRect(421,91,38,38);
    contextAttendanceNumberArea.fillStyle = '#000000';
    contextAttendanceNumberArea.font = '9pt sans-serif';
    contextAttendanceNumberArea.fillText(event.currentTarget.value,432,115);
  }
}

// 学籍番号レンダリング
function inputStudentNumberChange(event){
  const studentNumberValue = document.getElementById('input-student-number');
  localStorage.setItem('studentNumber',studentNumberValue.value);
  const canvasCard = document.getElementById("canvas001");
  if (canvasCard.getContext) {
    const contextStudentNumberArea = canvasCard.getContext("2d");
    contextStudentNumberArea.clearRect(261,131,198,38);
    contextStudentNumberArea.fillStyle = '#FFFACD';
    contextStudentNumberArea.fillRect(261,131,198,38);
    contextStudentNumberArea.fillStyle = '#000000';
    contextStudentNumberArea.font = '9pt sans-serif';
    contextStudentNumberArea.fillText(event.currentTarget.value,265,155);
  }
}

// 氏名レンダリング
function inputStudentNameChange(event){
  const studentNameValue = document.getElementById('input-student-name');
  localStorage.setItem('studentName',studentNameValue.value);
  const canvasCard = document.getElementById("canvas001");
  if (canvasCard.getContext) {
    const contextStudentNameArea = canvasCard.getContext("2d");
    contextStudentNameArea.clearRect(261,171,198,38);
    contextStudentNameArea.fillStyle = '#FFFACD';
    contextStudentNameArea.fillRect(261,171,198,38);
    contextStudentNameArea.fillStyle = '#000000';
    contextStudentNameArea.font = '9pt sans-serif';
    contextStudentNameArea.fillText(event.currentTarget.value,265,195);
  }
}

// ボタン処理
// function buttonDownload(){
//   const button = document.getElementById("download");
//   const date = localStorage.getItem('date');
//   const studentNumber = localStorage.getItem('studentNumber');
//   const fileName = ("attendance_card_" + date + "_" + studentNumber);
//   const canvasElement = document.getElementById("canvas001");
//   var a = document.createElement('a');
//   a.href = canvasElement.toDataURL("image/jpeg",0.75);
//   a.download = fileName+'.jpg';
//   a.click();
// }