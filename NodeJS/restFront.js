async function getUser() { // 로딩 시 사용자 가져오는 함수
    try {
      const res = await axios.get('/users');
      const users = res.data;
      // users
      console.log("users(res.data) : ", users); // 출력 예시 users(res.data) :  {1637737087889: '123'}
      const list = document.getElementById('list');
      list.innerHTML = '';
      // 사용자마다 반복적으로 화면 표시 및 이벤트 연결
      Object.keys(users).map(function (key) { // users의 키만 뽑아서배열로 만들고(Object.keys) 그 배열에 매핑 적용
        console.log("key는 도대체 무엇인가? : ", key);
        const userDiv = document.createElement('div');
        const span = document.createElement('span');
        span.textContent = users[key]; // textContent : 텍스트 콘텐츠를 가져오거나 수정할 수 있다
        const edit = document.createElement('button');
        edit.textContent = '수정';
        edit.addEventListener('click', async () => { // 수정 버튼 클릭
          const name = prompt('바꿀 이름을 입력하세요');
          console.log("변수 name에 대입할 프롬프트에 입력된 값 : ", name);
          if (!name) {
            return alert('이름을 반드시 입력하셔야 합니다');
          }
          try {
            await axios.put('/user/' + key, { name }); // 여기서 { name }를 restServer.js로 받는다.
            console.log("/user/ + key : ", '/user/' + key);
            console.log("{}를 씌운 name : ", { name });
            getUser();
          } catch (err) {
            console.error(err);
          }
        });
        const remove = document.createElement('button');
        remove.textContent = '삭제';
        remove.addEventListener('click', async () => { // 삭제 버튼 클릭
          try {
            await axios.delete('/user/' + key);
            getUser();
          } catch (err) {
            console.error(err);
          }
        });
        userDiv.appendChild(span);
        userDiv.appendChild(edit);
        userDiv.appendChild(remove);
        list.appendChild(userDiv);
        console.log(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  }
  
  window.onload = getUser; // 화면 로딩 시 getUser 호출
  // 폼 제출(submit) 시 실행
  document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    if (!name) {
      return alert('이름을 입력하세요');
    }
    try {
      await axios.post('/user', { name });
      getUser();
    } catch (err) {
      console.error(err);
    }
    e.target.username.value = '';
  });
  