const moreBtn = document.getElementById('more-btn');
const lessBtn = document.getElementById('less-btn');
const hiddenText = document.querySelector('.hidden-text');

const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');


moreBtn.addEventListener('click', () => {
  hiddenText.style.display = 'inline';
  moreBtn.classList.add('hidden');
  lessBtn.classList.remove('hidden');
  lessBtn.style.display = 'block';
  moreBtn.style.display = 'none';
  p2.style.color = '#757373';
  p3.style.color = '#757373';
  p4.style.color = '#757373'; 
});

lessBtn.addEventListener('click', () => {
  hiddenText.style.display = 'none';
  moreBtn.classList.remove('hidden');
  lessBtn.classList.add('hidden');
  moreBtn.style.display = 'block';
  lessBtn.style.display = 'none';
  p2.style.color = '#757373';
  p3.style.color = '#7573739d';
  p4.style.color = '#75737344';
});

function toggleList(icon) {
  const listItems = icon.parentNode.parentNode.querySelectorAll('li:not(#header)');
  const downIcon = icon.parentNode.querySelector('#down');
  const upIcon = icon.parentNode.querySelector('#up');
  if (downIcon.classList.contains('none')) {
      downIcon.classList.remove('none');
      upIcon.classList.add('none');
      downIcon.style.display = 'block';
      upIcon.style.display = 'none';
      listItems.forEach(item => item.classList.add('none'));
  } else {
      downIcon.classList.add('none');
      upIcon.classList.remove('none');
      upIcon.style.display = 'block';
      downIcon.style.display = 'none';
      listItems.forEach(item => item.classList.remove('none'));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('images');
  const downImg = document.getElementById('downImg');
  const upImg = document.getElementById('upImg');
  const imagesDiv = document.getElementById('n');

  container.addEventListener('click', () => {
      if (imagesDiv.style.display === 'none' || imagesDiv.style.display === '') {
          imagesDiv.style.display = 'block'; 
          downImg.style.display = 'none'; 
          upImg.style.display = 'inline'; 
      } else {
          imagesDiv.style.display = 'none'; 
          downImg.style.display = 'inline'; 
          upImg.style.display = 'none';
      }
  });
});
