const urls = [
  "https://dog.ceo/api/breed/germanshepherd/images/random",
  "https://dog.ceo/api/breed/pitbull/images/random",
  "https://dog.ceo/api/breed/akita/images/random",
];

async function fetchData() {
  try {
    const [fetched1, fetched2, fetched3] = await Promise.all([
      fetch(urls[0]),
      fetch(urls[1]),
      fetch(urls[2]),
    ]);
    const [data1, data2, data3] = await Promise.all([
      fetched1?.json(),
      fetched2?.json(),
      fetched3?.json(),
    ]);

    return { data1, data2, data3 };
  } catch (err) {
    throw new Error(
      "Sorry, your data can't be loaded. Please check your internet connection and try to reload this page."
    );
  }
}

async function loadData() {
  try {
    const { data1, data2, data3 } = await fetchData();

    const cardImg1 = document.getElementById("shepherd");
    cardImg1.setAttribute("src", data1.message);
    console.log(cardImg1);

    const cardImg2 = document.getElementById("pitbull");
    cardImg2.setAttribute("src", data2.message);
    console.log(cardImg2);

    const cardImg3 = document.getElementById("akita");
    cardImg3.setAttribute("src", data3.message);
    console.log(cardImg3);
  } catch (error) {
    console.error(error.message);
  }
}

loadData();
