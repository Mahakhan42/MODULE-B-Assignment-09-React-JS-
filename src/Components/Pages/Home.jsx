import React from 'react'

const Home = () => {
  return <>
    <div className='container'>
  {/* silder */}
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img width='100%' height='500px' src="https://w0.peakpx.com/wallpaper/832/896/HD-wallpaper-best-nature-nature.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img width='100%' height='500px' src="https://img.freepik.com/fotos-premium/lago-montana-nombre-cordillera-al-fondo_954226-126838.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img width='100%' height='500px' src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    {/* silder */}
    <br /><br />
    <hr /><h1 align='center'><b><i>Welcome To Home Page!</i></b></h1><hr />
    <br /><br />
<div className="row">
  <div className="col-md-6">
<p>Nature can refer to the general realm of living plants and animals, and in some cases to the processes associated with inanimate objects—the way that particular types of things exist and change of their own accord, such as the weather and geology of the Earth.Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology. It has core editorial offices across the United States, continental Europe, and Asia under the international scientific publishing company Springer Nature. Nature was one of the world's most cited scientific journals by the Science Edition of the 2022 Journal Citation Reports (with an ascribed impact factor of 64.8),[1] making it one of the world's most-read and most prestigious academic journals.[2][3][4] As of 2012, it claimed an online readership of about three million unique readers per month.Founded in autumn 1869, Nature was first circulated by Norman Lockyer and Alexander Macmillan as a public forum for scientific innovations. The mid-20th century facilitated an editorial expansion for the journal; Nature redoubled its efforts in explanatory and scientific journalism. The late 1980s and early 1990s saw the creation of a network of editorial offices outside of Britain and the establishment of ten new supplementary. </p>
  </div>
  <div className="col-md-6">
    <img width='100%' src="https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/library/our-cause/on-the-shore-borrowdale-and-derwent-water-1518851.jpg?auto=webp&width=767&crop=16:9&dpr=2%202x" alt="" />
  </div>
</div>
  <br /><br /><br />
<div className="images">
 <div className="row">
<div className="col-md-3">
<img width='100%' src="https://i.pinimg.com/1200x/c2/55/30/c25530ab671a4098de5598e047a9a985.jpg" alt="" />
</div>
<div className="col-md-3">
<img width='100%' src="https://c4.wallpaperflare.com/wallpaper/860/395/693/nature-autumn-wallpaper-preview.jpg" alt="" />
</div>
<div className="col-md-3">
<img width='100%' src="https://c4.wallpaperflare.com/wallpaper/745/592/914/nature-scenery-wallpaper-preview.jpg" alt="" />
</div>
<div className="col-md-3">
<img width='100%' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1VPfQLoC6tFTLoUjlNvFaEaun_cDPMQ5BXlNoMruQF0yKRBEzwG-CatGBPkZbWFEok2s&usqp=CAU" alt="" />
</div>
<br /><br />
<div className="col-md-3 p-3">
<img width='100%' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStb0pZmxbbLIQ_7zSXzTuwumVtsOkKPLuf9bG-oPCsJDfctyspX9UzdXBMGkXkiZRCsfs&usqp=CAU" alt="" />
</div>
<div className="col-md-3 p-3">
<img width='100%' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_83zwbiap4zbXr3WPytXkTWp5_DcVO-xwA&usqp=CAU" alt="" />
</div>
<div className="col-md-3 p-3">
<img width='100%' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnwAt6yWGcMWkXHBqPRgq7mgo4OramPWw_w&usqp=CAU" alt="" />
</div>
<div className="col-md-3 p-3">
<img width='100%' src="https://images.unsplash.com/photo-1546587348-d12660c30c50?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
</div>
</div>
</div>
<br /><br /><br />
</div>
 </>
}

export {Home} 
