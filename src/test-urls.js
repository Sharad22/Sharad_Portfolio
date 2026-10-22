import https from 'https';

const checkUrl = (url) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({
        url,
        statusCode: res.statusCode,
        contentType: res.headers['content-type'],
        location: res.headers['location']
      });
    }).on('error', (e) => {
      resolve({ url, error: e.message });
    });
  });
};

async function run() {
  const id = '1VyRWMvLHp-QLDABOi3xnFgu4emgQPSzT';
  const urls = [
    `https://drive.google.com/uc?export=view&id=${id}`,
    `https://drive.google.com/thumbnail?id=${id}&sz=w2000`,
    `https://lh3.googleusercontent.com/d/${id}`
  ];

  for (const url of urls) {
    const result = await checkUrl(url);
    console.log(result);
  }
}

run();
