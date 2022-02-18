import React from 'react'
import caroussel1 from '../images/Caroussel1.jpg'
import caroussel2 from '../images/Caroussel2.jpg'
import caroussel3 from '../images/Caroussel3.jpg'

function Slider() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src={caroussel1} alt="First slide"/>
        <div class="carousel-caption d-none d-md-block">
    <h5>Hola</h5>
    <p>Test</p>
  </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={caroussel2} alt="Second slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={caroussel3} alt="Third slide"/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>

    <div className="container">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, illum quis voluptatum esse quaerat voluptates animi cumque, tempora excepturi labore aspernatur eligendi ducimus laboriosam. Tempora et vel optio quibusdam illo.
            Debitis repudiandae nobis, placeat laborum perferendis est accusantium ipsam cumque, dignissimos adipisci non illum, culpa iure beatae quo ipsa? Velit odio perferendis praesentium earum omnis enim explicabo tempora dolore. Quam!
            Sequi, nobis dolorum. Molestiae perferendis nulla aliquid. Consequatur inventore et voluptate nisi corrupti odio nobis mollitia recusandae beatae excepturi! Amet distinctio quae saepe optio voluptatibus ratione quo quos, nesciunt delectus?
            Dolore ducimus praesentium adipisci deserunt nesciunt odit minus repellat distinctio quibusdam atque vero illum voluptates maiores nam velit eaque, recusandae culpa deleniti necessitatibus facere ut corporis magni esse quo? Quaerat.
            Expedita, error culpa aspernatur soluta quisquam, asperiores labore architecto accusantium magni vel ducimus excepturi quos voluptatibus sed sequi autem. Atque inventore assumenda ex? Magnam rem veniam perspiciatis quae quas eligendi!
            Inventore aut deleniti numquam adipisci. Mollitia odit sit soluta reiciendis beatae illo quidem quibusdam magnam inventore voluptas ratione, a facilis impedit rerum corrupti deserunt quaerat velit dolorem enim saepe ducimus.
            Ut, eveniet aliquid aut dolore aperiam id distinctio ab debitis praesentium veritatis, quae commodi ad sed recusandae, adipisci ducimus dolorem quibusdam corporis hic. Expedita, quasi omnis accusantium distinctio sequi atque!
            Tempora, reiciendis soluta. Natus neque porro sunt enim quod quibusdam odio ratione assumenda, ducimus dolorum voluptate iusto beatae error incidunt unde minima provident voluptatem quasi nulla nihil magni perspiciatis illo.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, illum quis voluptatum esse quaerat voluptates animi cumque, tempora excepturi labore aspernatur eligendi ducimus laboriosam. Tempora et vel optio quibusdam illo.
            Debitis repudiandae nobis, placeat laborum perferendis est accusantium ipsam cumque, dignissimos adipisci non illum, culpa iure beatae quo ipsa? Velit odio perferendis praesentium earum omnis enim explicabo tempora dolore. Quam!
            Sequi, nobis dolorum. Molestiae perferendis nulla aliquid. Consequatur inventore et voluptate nisi corrupti odio nobis mollitia recusandae beatae excepturi! Amet distinctio quae saepe optio voluptatibus ratione quo quos, nesciunt delectus?
            Dolore ducimus praesentium adipisci deserunt nesciunt odit minus repellat distinctio quibusdam atque vero illum voluptates maiores nam velit eaque, recusandae culpa deleniti necessitatibus facere ut corporis magni esse quo? Quaerat.
            Expedita, error culpa aspernatur soluta quisquam, asperiores labore architecto accusantium magni vel ducimus excepturi quos voluptatibus sed sequi autem. Atque inventore assumenda ex? Magnam rem veniam perspiciatis quae quas eligendi!
            Inventore aut deleniti numquam adipisci. Mollitia odit sit soluta reiciendis beatae illo quidem quibusdam magnam inventore voluptas ratione, a facilis impedit rerum corrupti deserunt quaerat velit dolorem enim saepe ducimus.
            Ut, eveniet aliquid aut dolore aperiam id distinctio ab debitis praesentium veritatis, quae commodi ad sed recusandae, adipisci ducimus dolorem quibusdam corporis hic. Expedita, quasi omnis accusantium distinctio sequi atque!
            Tempora, reiciendis soluta. Natus neque porro sunt enim quod quibusdam odio ratione assumenda, ducimus dolorum voluptate iusto beatae error incidunt unde minima provident voluptatem quasi nulla nihil magni perspiciatis illo.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, illum quis voluptatum esse quaerat voluptates animi cumque, tempora excepturi labore aspernatur eligendi ducimus laboriosam. Tempora et vel optio quibusdam illo.
            Debitis repudiandae nobis, placeat laborum perferendis est accusantium ipsam cumque, dignissimos adipisci non illum, culpa iure beatae quo ipsa? Velit odio perferendis praesentium earum omnis enim explicabo tempora dolore. Quam!
            Sequi, nobis dolorum. Molestiae perferendis nulla aliquid. Consequatur inventore et voluptate nisi corrupti odio nobis mollitia recusandae beatae excepturi! Amet distinctio quae saepe optio voluptatibus ratione quo quos, nesciunt delectus?
            Dolore ducimus praesentium adipisci deserunt nesciunt odit minus repellat distinctio quibusdam atque vero illum voluptates maiores nam velit eaque, recusandae culpa deleniti necessitatibus facere ut corporis magni esse quo? Quaerat.
            Expedita, error culpa aspernatur soluta quisquam, asperiores labore architecto accusantium magni vel ducimus excepturi quos voluptatibus sed sequi autem. Atque inventore assumenda ex? Magnam rem veniam perspiciatis quae quas eligendi!
            Inventore aut deleniti numquam adipisci. Mollitia odit sit soluta reiciendis beatae illo quidem quibusdam magnam inventore voluptas ratione, a facilis impedit rerum corrupti deserunt quaerat velit dolorem enim saepe ducimus.
            Ut, eveniet aliquid aut dolore aperiam id distinctio ab debitis praesentium veritatis, quae commodi ad sed recusandae, adipisci ducimus dolorem quibusdam corporis hic. Expedita, quasi omnis accusantium distinctio sequi atque!
            Tempora, reiciendis soluta. Natus neque porro sunt enim quod quibusdam odio ratione assumenda, ducimus dolorum voluptate iusto beatae error incidunt unde minima provident voluptatem quasi nulla nihil magni perspiciatis illo.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, illum quis voluptatum esse quaerat voluptates animi cumque, tempora excepturi labore aspernatur eligendi ducimus laboriosam. Tempora et vel optio quibusdam illo.
            Debitis repudiandae nobis, placeat laborum perferendis est accusantium ipsam cumque, dignissimos adipisci non illum, culpa iure beatae quo ipsa? Velit odio perferendis praesentium earum omnis enim explicabo tempora dolore. Quam!
            Sequi, nobis dolorum. Molestiae perferendis nulla aliquid. Consequatur inventore et voluptate nisi corrupti odio nobis mollitia recusandae beatae excepturi! Amet distinctio quae saepe optio voluptatibus ratione quo quos, nesciunt delectus?
            Dolore ducimus praesentium adipisci deserunt nesciunt odit minus repellat distinctio quibusdam atque vero illum voluptates maiores nam velit eaque, recusandae culpa deleniti necessitatibus facere ut corporis magni esse quo? Quaerat.
            Expedita, error culpa aspernatur soluta quisquam, asperiores labore architecto accusantium magni vel ducimus excepturi quos voluptatibus sed sequi autem. Atque inventore assumenda ex? Magnam rem veniam perspiciatis quae quas eligendi!
            Inventore aut deleniti numquam adipisci. Mollitia odit sit soluta reiciendis beatae illo quidem quibusdam magnam inventore voluptas ratione, a facilis impedit rerum corrupti deserunt quaerat velit dolorem enim saepe ducimus.
            Ut, eveniet aliquid aut dolore aperiam id distinctio ab debitis praesentium veritatis, quae commodi ad sed recusandae, adipisci ducimus dolorem quibusdam corporis hic. Expedita, quasi omnis accusantium distinctio sequi atque!
            Tempora, reiciendis soluta. Natus neque porro sunt enim quod quibusdam odio ratione assumenda, ducimus dolorum voluptate iusto beatae error incidunt unde minima provident voluptatem quasi nulla nihil magni perspiciatis illo.</p>
            </div>
  </div>
  )
}

export default Slider