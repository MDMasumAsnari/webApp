document.addEventListener('DOMContentLoaded', function() {
  const threadsList = document.getElementById('threadsList');
  const threadTitle = document.getElementById('threadTitle');
  const threadContent = document.getElementById('threadContent');
  const replyBox = document.getElementById('replyBox');
  const replyButton = document.getElementById('replyButton');
  const sendReply = document.getElementById('sendReply');

  // Mock data
  const threads = [
      { id: 1, title: 'Thread 1', content: 'Content of thread 1' },
      { id: 2, title: 'Thread 2', content: 'Content of thread 2' }
  ];

  // Load threads
  threads.forEach(thread => {
      const div = document.createElement('div');
      div.textContent = thread.title;
      div.onclick = () => selectThread(thread);
      threadsList.appendChild(div);
  });

  function selectThread(thread) {
      threadTitle.textContent = thread.title;
      threadContent.textContent = thread.content;
  }

  replyButton.onclick = () => {
      replyBox.style.display = 'block';
  };

  sendReply.onclick = () => {
      const replyContent = document.getElementById('replyContent').value;
      console.log(`Reply sent: ${replyContent}`);
      replyBox.style.display = 'none';
  };

  document.addEventListener('keydown', function(e) {
      if (e.key === 'D') {
          console.log('Delete thread');
      } else if (e.key === 'R') {
          replyBox.style.display = 'block';
      }
  });
});
