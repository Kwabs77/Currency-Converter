import React from 'react';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';
import pinterest from '../images/pinterest.svg';


export default function Footer() {
  return (
    <>
    <div className='footer'>
        <article>
        <span className='Ex'>ExRate</span>                  
        </article>
        <article  style={{paddingTop:'15px'}}>
           <span className='color'>Features</span>
            <ul>
                <li ><button className='align'>Currency Converter</button></li>
                <li><button className='align'>Different Currencies</button></li>
                <li><button>Updates in 5</button></li>
            </ul>
        </article>

        <article  style={{paddingTop:'15px'}}>
            <span className='color'>Resources</span>
            <ul>
                <li><button>Blog</button></li>
                <li><button>Developers</button></li>
                <li><button>Support</button></li>
            </ul>
            
        </article>


        <article  style={{paddingTop:'15px'}}>
           <span className='color'> Company</span>
            <ul>
                <li><button>About</button></li>
                <li><button>Our Team</button></li>
                <li><button>Careers</button></li>
                <li><button>Contact</button></li>
            </ul>
        </article>

        <section >
             <ul className='footer-list-flex' >
                <li><img src={facebook}/></li>
                <li><img src={pinterest}/></li>
                <li><img src={twitter}/></li>
                <li><img src={instagram}/></li>
            </ul>          
        </section>
    </div>    
    </>
  )
}
