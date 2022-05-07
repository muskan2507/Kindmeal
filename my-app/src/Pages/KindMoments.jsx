import React, { useState, useEffect } from 'react'
import MapKindMeals from '../Components/MapKindMeals';
import { ButtonBar, AButton, PButton, Pagination, PageNum, Num, KindContainer, ArticleHeader, Ahedd, Apara} from '../Components/Styled'





const KindMoments = () => {

  const [data, setData] = useState([])
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const getData = async () => {

      try {
        let res = await fetch(`http://localhost:3000/kindmoment?_page=${pageNumber}&_limit=12`)
        let data = await res.json();
        setData(data)
        console.log(data)
      }
      catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [pageNumber])

  return (
    <>
          <ArticleHeader>
        <Ahedd>KindMoments   |   Saving Lives with Yummy Photos</Ahedd>
        <Apara>Discover new, delicious meat-free cuisines enjoyed by other compassionate food lovers. Share your interesting KindMoments, and build your own fans and followers to encourage kind, healthy meals.
        </Apara>
        <Apara> You can also follow our Facebook Page or Twitter for more news and updates.</Apara>
        <Apara>Get started sharing your tasty moments now.</Apara>
      </ArticleHeader>
      <br />
      <br />
      <ButtonBar>
        <div style={{ display: "flex", gap: "20px" }}>
          <AButton style={{ background: "#2bb673" }}>Moments</AButton>
          <AButton style={{ background: "white", color: "black", border: "1px solid black" }}>Deal Reviews</AButton>
          <AButton style={{ background: "#ffffff", color: "black", border: "1px solid black" }}>Following</AButton>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <input placeholder='Search User or Shop' style={{ height: "33px", width: "180px" }} type="text" />
          <select style={{ height: "39px", width: "180px" }}>
            <option > All Locations</option>
            <option > lang Valley</option>
            <option >•&nbsp; Kuala Lumpur</option>
            <option >•&nbsp; Petaling Jaya</option>
            <option >•&nbsp; Ampang</option>
            <option >•&nbsp; Ara Damansara</option>
            <option >•&nbsp; Bangsar</option>
            <option >•&nbsp; Bangsar South</option>
            <option >•&nbsp; Bukit Bintang</option>
            <option >•&nbsp; Bukit Damansara</option>
            <option >•&nbsp; Cheras</option>
            <option >•&nbsp; Damansara Heights</option>
            <option >•&nbsp; Damansara Utama</option>
            <option >•&nbsp; Ipoh</option>
            <option >•&nbsp; Kelana Jaya</option>
            <option >•&nbsp; Kepong</option>
            <option >•&nbsp; Klang</option>
            <option >•&nbsp; Kota Damansara</option>
            <option >•&nbsp; Mont Kiara</option>
            <option >•&nbsp; Mutiara Damansara</option>
            <option >•&nbsp; Old Klang Road</option>
            <option >•&nbsp; Puchong</option>
            <option >•&nbsp; Putrajaya</option>
            <option >•&nbsp; Sepang</option>
            <option >•&nbsp; Seri Kembangan</option>
            <option >•&nbsp; Shah Alam</option>
            <option >•&nbsp; Sri Petaling</option>
            <option >•&nbsp; Subang</option>
            <option >•&nbsp; Taman Desa</option>
            <option >•&nbsp; Taman Tun</option>

          </select>
          <AButton>Search</AButton>
        </div>
      </ButtonBar>
      <Pagination>
        <p>Page : </p>
        <PageNum>
          <Num onClick={() => setPageNumber(1)}>1</Num>
          <Num onClick={() => setPageNumber(2)}>2</Num>
          <Num onClick={() => setPageNumber(3)}>3</Num>
          <Num onClick={() => setPageNumber(4)}>4</Num>
          <Num onClick={() => setPageNumber(5)}>5</Num>
          <Num onClick={() => setPageNumber(6)}>6</Num>
          <Num onClick={() => setPageNumber(7)}>7</Num>
          <Num onClick={() => setPageNumber(8)}>8</Num>
          <Num onClick={() => setPageNumber(9)}>9</Num>
          <Num onClick={() => setPageNumber(10)}>10</Num>
        </PageNum>
        <div style={{ display: "flex", gap: "10px" }}>
          <PButton onClick={() => setPageNumber(pageNumber - 1)}>« Prev</PButton>
          <PButton onClick={() => setPageNumber(pageNumber + 1)}>Next »</PButton>
        </div>
      </Pagination>
      <KindContainer>{
        data.map((data) => (

          <>
            <MapKindMeals key={data.id} {...data} />
          </>
        ))
      }
      </KindContainer>

    </>
  )
}

export default KindMoments