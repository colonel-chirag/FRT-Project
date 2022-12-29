import React, { Component } from 'react';



const API_KEY=process.env.REACT_APP_API_KEY ;


export default class Home extends Component {
  render() {
    return (
        <div>
        <header className = "header" id = "header">
            <div className = "head-top">
                <div className = "site-name">
                    <span>GRILL KITCHEN</span>
                </div>
                <div className = "site-nav">
                    <span id = "nav-btn">MENU <i className = "fa fas fa-bars"></i></span>
                </div>
            </div>

            <div className = "head-bottom flex">
                <h2>Experience The Great Taste</h2>
                
            </div>
        </header>
       

       <div className = "sidenav" id = "sidenav">
            <span className = "cancel-btn" id = "cancel-btn">
                <i className = "fas fa-times"></i>
            </span>

            <ul className = "navbar">
                <li><a href = "/#header">Home</a></li>
                <li><a href = "/#services">Services</a></li>
                <li><a href = "/#Cuisine">Cuisine</a></li>
                <li><a href = "/#rooms">Rooms</a></li>
                <li><a href = "/#customers">Customers</a></li>
                <li><a href = "/#Question">Question</a></li>
            </ul>
            <button className = "btn sign-up">sign up</button>
            <button className = "btn log-in">log in</button>
        </div>
       
        <div id = "modal"></div>
       
        <section className = "services sec-width" id = "services">
            <div className = "title">
                <h2>services</h2>
            </div>
            <div className = "services-container" >
              
                <article className = "service">
                    <div className = "service-icon">
                        <span>
                            <i className = "fas fa-utensils"></i>
                        </span>
                        <p fontsize='large' fontweight= 'bold'>Food Service</p>
                    </div>
                    
                </article>
               
                <article className = "service">
                    <div className = "service-icon">
                        <span>
                            <i className = "fas fa-swimming-pool"></i>
                        </span>
                        <p  fontsize='large' fontweight='bold'>Refreshment</p>
                    </div>
                    
                </article>
               
                <article className = "service">
                    <div className = "service-icon">
                        <span>
                            <i className = "fas fa-broom"></i>
                        </span>
                        <p font-size='large'font-weight= 'bold'>House Kepping</p>
                    </div>
                    </article>
               
                <article className = "service">
                    <div className = "service-icon">
                        <span>
                            <i className = "fas fa-door-closed"></i>
                        </span>
                        <p font-size='large'font-weight='bold'>Room Security</p>
                    </div>
                    
                </article>
               
            </div>
        </section>

        <section className = "rooms sec-width" id = "Cuisine">
            <div className = "title">
                <h2>Cuisine</h2>
            </div>
            <div className = "rooms-container">
               
               
                <article className = "room">
                    <div className = "room-image">
                        <img src = "https://media.istockphoto.com/photos/fast-food-set-picture-id475895644?b=1&k=20&m=475895644&s=170667a&w=0&h=LWwCu-y_v3PAk5lw52NXvp4KSoWAJ4ePfKQlITrTvpA="  alt = "" />
                    </div>
                    <div className = "room-text">
                        <h3>Fast-Food</h3>
                        <ul>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                               Burger,Pizza,Fries,Hot-dog,etc
                            </li>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Noodles,Shezwan-Rice,Manchurian,etc
                            </li>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Vada-Pav,Samosa,Pav-Bhaji,etc
                            </li>
                        </ul>
                        
                    </div>
                </article>
                
                <article className = "room">
                    <div className = "room-image">
                        <img src = "https://media.istockphoto.com/photos/panner-butter-masala-with-missi-roti-picture-id474476806?b=1&k=20&m=474476806&s=170667a&w=0&h=j3klbknncOhqicZ1oZDIx5mF-jgbepWnBXjpw_w1TrE=" alt = ""/>
                    </div>
                    <div className = "room-text">
                        <h3>Punjabi Cuisine</h3>
                        <ul>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Paneer Tikka, Hara Bhara Kabab, Malai-Kofta,etc
                            </li>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                              Cholle-Bhature,Amritsari-Kulcha,Kadhi,Sarsoo-ka-saag,etc
                            </li>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Chiken-Tikka, Chicken-Lollipop,Chiken Biryani,etc.
                            </li>
                        </ul>
                        
                    </div>
                </article>
               
                <article className = "room">
                    <div className = "room-image">
                        <img src = "https://media.istockphoto.com/photos/goal-gappa-or-pani-puri-picture-id1314329915?b=1&k=20&m=1314329915&s=170667a&w=0&h=Sd7vk0xrgMD-F6r5zv7-L5ThLf_k_2PlqSRjiDIXYEQ=" alt = ""/>
                    </div>
                    <div className = "room-text">
                        <h3>Famous Chat</h3>
                        <ul>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Pani-Puri, Dahi-Puri,Shex-Puri ,Masala-Puri,etc
                            </li>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Tikhi-Bhel,Mithi-Bhel ,Katori-Bheli,Cheese Bhel,etc
                            </li>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                               Butter Dabeli,Cheese Butter Dabeli, Samosa-Chat,etc
                            </li>
                        </ul>
                       
                    </div>
                </article>
               
            </div>
        </section>


        

        <section className = "rooms sec-width" id = "rooms">
            <div className = "title">
                <h2>rooms</h2>
            </div>
            <div className = "rooms-container">
               
                <article className = "room">
                    <div className = "room-image">
                        <img src = "https://media.istockphoto.com/photos/luxery-hotel-room-picture-id112263804?b=1&k=20&m=112263804&s=170667a&w=0&h=xjwHUkolvn-g9lKql9wFXrc9jsrZXcyq-g_NJ5mrv50=" alt="" />
                    </div>
                    <div className = "room-text">
                        <h3>Luxury Rooms</h3>
                        <ul font-size= 'x-large'>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Bed-Room
                            </li>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Living-Area
                            </li>
                           
                        </ul>
                        
                    </div>
                </article>
             
                <article className = "room">
                    <div className = "room-image">
                        <img src = "https://images.unsplash.com/photo-1630492532835-36409ac5d46f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGx1eGVyeSUyMGJlZHJvb21zfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className = "room-text">
                        <h3>Luxury Rooms</h3>
                        <ul font-size= 'x-large'>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Bed-Room
                            </li>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Living-Area
                            </li>
                           
                        </ul>
                    </div>
                </article>
               
                <article className = "room">
                    <div className = "room-image">
                        <img src = "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGx1eGVyeSUyMGJlZHJvb21zfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className = "room-text">
                        <h3>Luxury Rooms</h3>
                        <ul font-size= 'x-large'>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Bed-Room
                            </li>
                            <li>
                                <i className = "fas fa-arrow-alt-circle-right"></i>
                                Living-Area
                            </li>
                           
                        </ul>
                    </div>
                </article>
               
            </div>
        </section>

<div className = "book">
            <form className = "book-form">
                <div className = "form-item">
                    <label for = "checkin-date">Check In Date: </label>
                    <input type = "date" id = "chekin-date"/>
                </div>
                <div className = "form-item">
                    <label for = "checkout-date">Check Out Date: </label>
                    <input type = "date" id = "chekout-date"/>
                </div>
                <div className = "form-item">
                    <label for = "adult">Adults: </label>
                    <input type = "number" min = "1" value = "1" id = "adult"/>
                </div>
                <div className = "form-item">
                    <label for = "children">Children: </label>
                    <input type = "number" min = "1" value = "1" id = "children"/>
                </div>
                <div className = "form-item">
                    <label for = "rooms">Rooms: </label>
                    <input type = "number" min = "1" value = "1" id = "rooms"/>
                </div>
                <div className = "form-item">
                    <input type = "submit" className = "btn" value = "Book Now"/>
                </div>
            </form>
        </div>
        <section className = "customers" id = "customers">
            <div className = "sec-width">
                <div className = "title">
                    <h2>customers</h2>
                </div>
                <div className = "customers-container">
                  
                    <div className = "customer">
                        <div className = "rating">
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "far fa-star"></i></span>
                        </div>
                        <h3>We Loved it</h3>
                        <p>We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks we were in India</p>
                        <br/>
                        <span>Mridul Sharma, India</span>
                    </div>
                    
                   
                    <div className = "customer">
                        <div className = "rating">
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "far fa-star"></i></span>
                        </div>
                        <h3>Comfortable Living</h3>
                        <p>We had a great four nights at this hotel located in the heart of the historic district and easy walking distance to all the sites. We had a room with a window with a view of the Arno River which was quite a treat.</p>
                        <br/>
                        <span>Ananya Birla, Singapore</span>
                    </div>
                   
                   
                    <div className = "customer">
                        <div className = "rating">
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "fas fa-star"></i></span>
                            <span><i className = "far fa-star"></i></span>
                        </div>
                        <h3>Nice Place</h3>
                        <p>Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. </p>
                        <br/>
                        <span>Marry Pinto, India</span>
                    </div>
                   
                </div>
            </div>
        </section>
        
        
        <footer className = "footer">
            <div className = "footer-container">
                <div>
                    <h2>About Us </h2>
                    <p>Grill Kitchen Unpretentious restaurant whipping up traditional offerings including rice & meat dishes.</p>
                    <ul className = "social-icons">
                        <li className = "flex">
                            <i className = "fa fa-twitter fa-2x"></i>
                        </li>
                        <li className = "flex">
                            <i className = "fa fa-facebook fa-2x"></i>
                        </li>
                        <li className = "flex">
                            <i className = "fa fa-instagram fa-2x"></i>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2>Useful Links</h2>
                    <a href = "/#">Blog</a>
                    <a href = "/#">Rooms</a>
                    <a href = "/#">Subscription</a>
                    <a href = "/#">Gift Card</a>
                </div>

                <div>
                    <h2>Privacy</h2>
                    <a href = "/#">Career</a>
                    <a href = "/#">About Us</a>
                    <a href = "/#">Contact Us</a>
                    <a href = "/#">Services</a>
                </div>

                <div id="Question">
                    <h2>Have A Question</h2>
                    <div >
                        <iframe title='ChatBOt' src={`https://webchat.botframework.com/embed/qnahotel-bot?s=${API_KEY}`}
                          width= '300px' height='70%'></iframe>
                        
                    </div>
            </div>
            </div>
        </footer>
        
        </div> 
        
    );
  }
}
