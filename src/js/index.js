Vue.component('icon',{
	props:['name'],
	template:`<i class=fas fa-${name}></i>`,

});

Vue.component('navbar',{
	template:`
	<div id="nav">
		<div class="navbar-fixed">
             <nav>
                <div class="nav-wrapper">
                  <div class="brand-logo">
                    <a href="">EDWIGHT DELGADO</a>
                    
                  </div>
                  <a href="#" data-target="mobile-demo"><i class="material-icons">menu</i></a>
                  <ul class="right hide-on-med-and-down">
                    <li><a href="#about">Acerca de Mi</a></li>
                    <li><a href="#project">Proyectos</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                  </ul>
                </div>
              </nav>
        </div>
        <ul class="sidenav" id="mobile-demo">
           	<div class="close">
           		<a href="#" data-target="mobile-demo" class="sidenav-trigger">
           			<i class="material-icons">menu</i>
           		</a></div>
            <li class="active">
            	<icon name="user"/>
            	<a href="#">Acerca de Mi</a>
            </li>
            
            <li><icon name="rocket"/>
            	<a href="#">Proyectos</a>
            </li>
            <li>
            	<i class="fas fa-chart-bar"></i>
            	<a href="#">Habilidades</a>
            </li>
            <li><i class="fas fa-graduation-cap"></i>
            	<a href="#">Educación</a>
            </li>
                
        </ul>
	</div>
	`,
	data:function(){
		return {
			state:false
		}
	},
	methods:{
		toggleNavbar:function(){
			//this.$store.commit('increment',3)
			this.state != this.state;
		}, 

	},

});
Vue.component('about',{
	template:`
	<section id="about">
        <h3 style="margin-top: 0;">Acerca de Mi</h3>
            <div class="container"> 
              <div class="row">
                <div class="col s12">
                  <div class="card horizontal">
                    <div class="card-stacked">
                        <div class="card-content">
                            <div class="about">
                                    <p>Hola soy Edwight Delgado desarrollador Web (Backend y Frontend) soy de Venezuela.
                                    Me encanta crear software y solucionar problemas con una gran variedad de herramentas como Php con laravel, NodeJS con express.
                                    Trabajo en tecnologías del lado del cliente como: Html, Css, Javascript, Vue.js, Bootstrap, entre otras.
                                    <p>Estos son algunos proyectos profesionales y personales que he realizado</p>
                            </div>	
                        </div>
                        
                    </div>
                  </div>
                </div>  
              </div>
            </div>
        </section>
	`,
	

});
Vue.component('skills',{
	template:`
	<section id="skills">
      <h3>Habilidades</h3>
        <div class="container"> 
            <div class="row">
                <div class="col s12 l6">
                    <div class="card horizontal">
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>Frondten.</p>
                        </div>
                        <div class="card-action">
                          <ul class="social-icons icon-rounded list-unstyled list-inline"> 
                            <li> <a href="#"><i class="fab fa-css3"></i></a> </li> 
                            <li> <a href="#"><i class="fab fa-html5"></i></a></li> 
                            <li> <a href="#"><i class="fab fa-gulp"></i></a></li>
                            <li> <a href="#"><i class="fab fa-js"></i></a></li>
                            <li> <a href="#"><i class="fab fa-vuejs"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="col s12 l6">
                    <div class="card horizontal">
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>backend.</p>
                          
                        </div>
                        <div class="card-action">
                          <ul class="social-icons icon-rounded list-unstyled list-inline"> 
                            <li> <a href="#"><i class="fab fa-node"></i></a> </li> 
                            <li> <a href="#"><i class="fab fa-laravel"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="col s12 l6">
                    <div class="card horizontal">
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>Base de Datos.</p>
                        </div>
                        <div class="card-action">
                            <ul class="social-icons icon-rounded  list-unstyled list-inline"> 
                                <li> <a href="#">
                                    <img src="img/web/mysql1.png">
                                </a> </li> 
                                <li> <a href="#">
                                    <img src="img/web/mongodb1.png">
                                </a></li>
                                <li> <a href="#">
                                    <img src="img/web/postgresql1.png">
                                </a></li>
                            </ul>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
	`,
	

});
Vue.component('project',{
	props:['cardProyect'],
	template:`
	<section id="project">
                <h3>Proyectos</h3>
                    <div class="container"> 
                        <div class="row">
                            <div v-for="card in cardProyect" class="col s12 m6 l4">
                                <div class="card">
                                <div class="card-image waves-effect waves-block waves-light">
                                  <img class="activator" :src="card.img">
                                </div>
                                <div class="card-content body">
                                  <span class="card-title activator grey-text text-darken-4">{{card.title}}<i class="material-icons right">more_vert</i></span>
                                  
                                </div>
                                <div class="card-reveal">
                                  <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                  <ul v-html="card.body">
                                            
                                  </ul>
                                  <div class="card-action back-action">
                                    <ul class="social-icons icon-circle list-unstyled list-inline"> 
                                      <li v-if="card.github"> <a :href="card.github"><i class="fab fa-github"></i></a></li> 
                                      <li v-if="card.bitbucket"> <a :href="card.bitbucket"><i class="fab fa-bitbucket"></i></a> 
                                      <li v-if="card.link"> <a :href="card.link"><i class="fas fa-share-square"></i></a></li>
                                    </ul>

                                  </div>

                                </div>
                              </div> 
                            </div>

                        </div>
                    </div>
                </div>
            </section>
	`,
	

});
Vue.component('App',{
	template:`
	<div id="parent">
		
		<navbar/>
		<about/>
		<skills/>
		
	</div>`,
});

const vm = new Vue({
    el:'#app',
    data:{
	    cardProyect:[
	    	{
	                    title:'Sistema de Emergencia 911 Falcón',
	                    img:'img/project/911falcon.jpg',
	                    github:'https://github.com/edwight/911falcon_master',
	                    bitbucket:null,
	                    body:`<ul> 
	                    <li>laravel en el back-end</li>
	                    <li>Diseñado en Bootstrap.</li>
	 
	                    </ul>`,
	        },
	        {
	                    title:'Blog de Canto Lirico Unefm',
	                    img:'./img/project/blog-vocal-min.jpg',
	                    github:null,
	                    bitbucket:'https://bitbucket.org/edwight/proyecto-orientacion-vocal/src/master/',
	                    link:'https://orientacion-vocal.herokuapp.com/',
	                    body:`<ul> 
	                    <li>node.js en el back-end</li>
	                    <li>express </li>
	                    <li>Bootstrap CSS en el frontend</li>
	                    <li>Vue.js para renderizar vistas y crear componentes</li>
	                    </ul>`,
	        },
	        {
	                    title:'Photogram Clon de Imstagram',
	                    img:'img/project/photogram.jpg',
	                    github:'https://github.com/edwight/photogram',
	                    bitbucket:null,
	                    link:null,
	                    body:`<ul> 
	                    <li>node.js en el back-end</li>
	                    <li>express </li>
	                    <li>Materialize en el frontend</li>
	                    <li>paje.js para renderizar vistas</li>
	                    <li>gulp para automatizacion de tareas</li>
	                    <li>babel.js para usar ultimas caracteristicas de javascript</li>
	                    </ul>`,
	        },
	        {
	                    title:'Experimental Ecommece App',
	                    img:'img/project/ecommece.jpg',
	                    github:null,
	                    bitbucket:null,
	                    link:null,
	                    body:`<ul> 
	                    
	                    <li>Laravel en el back-end</li>
	                    <li>Bootstrap CSS en el frontend</li>
	                    <li>Mysql en la base de dato</li>
	                    </ul>`,
	        },
	        {
	                    title:'Republic Of Gamers Colombia',
	                    img:'img/project/rog.jpg',
	                    github:null,
	                    bitbucket:null,
	                    link:'https://republicofgamerscolombia.com/',
	                    body:`<ul> 
	                    
	                    <li>Laravel en el back-end</li>
	                    <li>Bootstrap CSS en el frontend</li>
	                    <li>Mysql en la base de dato</li>
	                    </ul>`,
	        },
	       	{
	                    title:'Dell Medellin',
	                    img:'img/project/dellmedellin.jpg',
	                    github:null,
	                    bitbucket:null,
	                    link:'https://dellmedellin.com',
	                    body:`<ul> 
	                    
	                    <li>Laravel en el back-end</li>
	                    <li>Bootstrap CSS en el frontend</li>
	                    <li>Mysql en la base de dato</li>
	                    </ul>`,
	        }
	    ]
    }
}); 

