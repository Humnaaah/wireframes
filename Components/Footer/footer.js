class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        footer{
            background:#F1F9FF;
            height:auto;
            min-height:200px;
        }
        .copyright{
            font-size: 12px;
            color: #6f6f6f;
            margin-bottom: 10px;
            margin-top:20px;
        }
        .copyright span a{
            color: #3081b3 !important;
            text-decoration: underline !important;
            margin-left: 10px;
            margin-right: 5px;
            font-size:12px
        }
        .footer-cont{
            padding: 6%;
            padding-bottom: 1%;
        }
        .footer-title{
            font-size:14px;
            color: #3081b3;
        }
        .footer-list{
            padding: 0;
            margin-top: 15px;
            padding-inline-start: 0px;
        }
        .social-list{
            margin-top: 0px;
            display: inline-flex;
            list-style-type:none
        }
        .social-list li{
            margin: 0px 5px; 
        }
        .social-list img{
            height:20px;
            width:20px;
            fill:#489FE7
        }
        .footer-list li{
            margin-left:0px;
            font-weight:500;
            display:block;
           
        }
        .footer-list li a{
            color: #0D81E3 !important;
        }
        .footer-link{
            text-align: left;
            margin-left: 0px;
            margin-right: 0px;
            text-transform: capitalize;
            font-size: 12px;
        }
        
        @media(min-width:768px){
            div.col-sm-7.seven-three{width:60%!important;}
            div.col-sm-5.five-two{width:40%!important;}
          }
        </style>
        <footer>  
          <div class='container'>
          <div class="footer-cont">
                    <div class="col-sm-12">
                    <div class="row">
                    <div class="col-sm-8 seven-three">
                    <div class="row">
                        <div class="col-sm-4" >
                            <h6 class='mainColor footer-title'> Shop CBD & More </h6> 
                            <ul class='footer-list'>
                                <li><a href="shop.html" class='footer-link'>Shop by Need</a></li>
                                <li><a href="work.html"  class='footer-link'>Shop by Category</a></li>
                                <li><a href="about.html"  class='footer-link'>Shop By Type</a></li>
                                <li><a href="life.html"  class='footer-link'>Shop By Brand</a></li>
                                <li><a href="life.html"  class='footer-link'>Shop All CBD</a></li>
                                <li><a href="life.html"  class='footer-link'>CBD FAQ’s</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-4">
                            <h6 class='mainColor footer-title'> Locations </h6> 
                            <ul class='footer-list'>
                                <li><a href="shop.html" class='footer-link'>Glastonbury, CT</a></li>
                                <li><a href="work.html"  class='footer-link'>Hickory, CT</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-4" >
                            <h6 class='mainColor footer-title'> About Incredible Edibles </h6> 
                            <ul class='footer-list'>
                                <li><a href="shop.html" class='footer-link'>About Us</a></li>
                                <li><a href="work.html"  class='footer-link'>News & Press</a></li>
                                <li><a href="about.html"  class='footer-link'>Franchise Opps</a></li>
                                <li><a href="life.html"  class='footer-link'>Join the Team</a></li>
                                <li><a href="life.html"  class='footer-link'>FAQ</a></li>
                                <li><a href="life.html"  class='footer-link'>Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div class="col-sm-4 five-two">
                    <div class="row">
                        <div class="col-sm-8" >
                            <h6 class='mainColor footer-title'> Connect With Us </h6> 
                            <ul class='footer-list'>
                                <li><a href="shop.html" class='footer-link'>Contact Us</a></li>
                                <li><a href="work.html"  class='footer-link'>Rewards</a></li>
    
                            </ul>
                        </div>
                     
                        <div class="col-sm-4" >
                            <ul class='social-list'>
                                <li> <img src="./Assets/Images/facebook.svg" alt="facebook"/> </li>
                                <li> <img src="./Assets/Images/instagram.svg" alt="instagram"/> </li>
                                <li> <img src="./Assets/Images/youtube.svg" alt="instagram" style="margin-top:7px"/> </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                    <div class="text-center">
                        <p class="copyright"> Copyright © 2022 Incredible Edibles. All rights reserved. <span> <a class='basic-link'> Terms & Conditions </a> </span> <span> <a class='basic-link'> Your Privacy </a> </span> <span> <a class='basic-link'> Refund Policy </a> </span></p>
                    </div>
                </div>
          </div>                
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);