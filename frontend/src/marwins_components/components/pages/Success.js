import React, { Component } from "react";
import styled from "styled-components";

export default class Success extends Component {
  render() {
    return (
      <SuccessContainer>
        <div class="jumbotron Body">
          <h1 class="display-4">
            Die Interhyp-Gruppe dankt für Ihre Bewerbung.
          </h1>
          <p class="lead">Wie geht es nun weiter? </p>
          <hr class="my-4" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tempus, nisl a luctus blandit, neque dolor tristique felis, quis
            eleifend tellus ex id ipsum. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Donec laoreet
            ornare erat in vehicula. Aliquam ullamcorper nisi varius, finibus
            turpis nec, tristique eros. Curabitur eu dui at odio viverra
            ultrices eu et urna. Ut in urna ornare, consectetur est ac, egestas
            justo. Cras leo dui, gravida vitae metus non, ultrices feugiat
            justo. Proin gravida lacinia diam sit amet dictum. Sed finibus
            vulputate risus vel cursus. Nam sed pulvinar ipsum, non condimentum
            lacus. Sed facilisis scelerisque est, id interdum dui vestibulum
            vitae. Pellentesque cursus sapien vitae risus interdum, sit amet
            ornare sapien tincidunt. Cras ornare ultrices ligula vel lacinia.
            Nulla luctus quam velit, sit amet vehicula erat eleifend vitae.
            Donec rhoncus dignissim quam, et efficitur elit finibus non. Sed nec
            turpis lectus. Nulla placerat sapien elit, eget vulputate velit
            volutpat et. Integer nulla ligula, porta at tellus sit amet,
            fringilla congue metus. Pellentesque at lorem at tortor rutrum
            varius. Curabitur iaculis, sapien non tempus placerat, nisl dolor
            mattis tellus, at congue augue lacus ac urna. Suspendisse pharetra
            finibus dolor a consectetur. Maecenas sagittis iaculis ligula quis
            rhoncus. Ut non sagittis nisl. Aliquam in nulla auctor, accumsan
            nulla et, dictum neque. Praesent sed erat non ex ultricies laoreet.
            Nulla rutrum fringilla neque vel condimentum. Ut in augue mi. Sed
            porta tempus ipsum non mattis. Donec convallis magna eget nulla
            gravida ornare. Fusce dignissim risus eu ultricies faucibus. Proin
            molestie a velit ut molestie. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum in ex nisl. Donec purus
            nulla, dapibus vitae ornare a, pretium ut elit. Ut vel laoreet erat.
            Aliquam sed ipsum sagittis, gravida mauris quis, dignissim sem.
            Fusce posuere vestibulum enim a euismod. Nam eget pulvinar eros.
            Nulla nec blandit nunc, non sodales nisi. Praesent at ullamcorper
            enim, quis posuere diam. Duis non mi lorem. Quisque ut est pulvinar,
            finibus enim eu, semper nunc. Aliquam finibus eleifend quam sit amet
            vestibulum. Donec elit urna, sollicitudin ac congue iaculis, dapibus
            quis enim. Donec rhoncus euismod urna quis cursus. Nunc lacinia ante
            eget ornare suscipit. Mauris vulputate luctus ex at ornare.
            Phasellus vel vehicula quam. Cras blandit et leo et lacinia.
            Suspendisse potenti. Duis pulvinar ex nisl, at sodales est dignissim
            eget. Praesent in hendrerit risus, nec fermentum urna.
          </p>
          <a class="btn btn-primary btn-lg" href="/" role="button">
            Hier geht's weiter
          </a>
        </div>
      </SuccessContainer>
    );
  }
}

const SuccessContainer = styled.body`
  .Body {
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    width: 50%;
    padding: 5rem;
  }
`;
