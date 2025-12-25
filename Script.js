fetch('videos.json')
  .then(r => r.json())
  .then(videos => {
    const div = document.getElementById('videos')

    videos.forEach(v => {
      if (v.type === 'embed') {
        div.innerHTML += `
          <div class="video">
            <h3>${v.title}</h3>
            <iframe src="${v.url}" width="100%" height="250" allowfullscreen></iframe>
          </div>
        `
      } else {
        div.innerHTML += `
          <div class="video">
            <h3>${v.title}</h3>
            <a href="${v.url}" target="_blank">▶ Assistir</a>
          </div>
        `
      }
    })
  })
