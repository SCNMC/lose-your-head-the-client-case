<script>
      import * as helpers from "@prismicio/helpers";
  export let standardNumber;
  export let standardHeaderTitle;
  export let standardHeaderIntroduction;
</script>


<section class="detail">
    <img class="detail-hero-img" src="assets/hero-image.jpeg" alt="woman with laptop" />
       <section class="detail-hero-heading">
           <h2>{`${standardNumber}.0`}</h2>
           <h3>{standardHeaderTitle}</h3>
       </section>
   </section>
<p>{@html helpers.asHTML(standardHeaderIntroduction)}</p>

<style>

    /* hero */
    /* mobile viewport */
    section {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1em;
            border-bottom: 4px solid #000;
            margin: 1.5em 2.5em;
        }
        .detail-hero-heading {
            z-index: 1;
            border:none;
            padding: 0em;
            margin-left: 0em;
            margin-top: -5em;
            text-align: left;
    
        }
         h2 {
            background-color: #fff021;
            border-top-right-radius: 15px;
            margin-top: .2em;
            font-size: 2.5em;
        }
       h3{
            font-size: 1.5em;
           margin: 0px;
        }
    
        .detail-hero-img {
            z-index: -1;
            width: 100%;
            height: auto;
        }
        
       
    
    /* desktop viewport */
        @media (min-width: 60em) {
            section {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                border-bottom: 4px solid #000;
                margin: 2em 5em;
            }
            /* hero */
            .detail{
                margin-bottom: 0.5em;
            }
    
            .detail-hero-heading {
            z-index: 1;
            margin-top: -9em;
            margin-bottom: 0.5em;
            border:none;
        }
    
                    
            .detail-hero-img{
                width: 100%;
                height: 25em;
                object-fit: cover;
                display: flex;
                align-self: center;
                z-index: -1;
            }
    
             h2 {
                background-color: #fff021;
                border-top-right-radius: 15px;
                width: 1.6em;
                font-size: 6em;
            }
             h3{
                font-size: 5em;
                margin: 0px
            }
            p{
            font-size: 1.8em;
            font-weight: bold;
            margin-top: 0px;
            margin: .4em 2.7em;
            padding-bottom: 1em;
            }
        }
    </style>