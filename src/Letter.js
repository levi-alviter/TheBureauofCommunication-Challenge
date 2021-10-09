import React from 'react';
import './css/Letter.css';

function Letter(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="header">
            <span>NOTICE</span>
            <span>OF</span>
            <span>EXPULSION</span>
        </div>
      
        <div className="content">
          <p>
            <span>This is to inform you that</span><span className="field">{props.show.answer1}<span></span><span>(1)(pet name)</span></span>, your cuddly but <span className="field">{props.show.answer2}<span></span><span>(2)(adjective)</span></span> <span className="field">{props.show.answer3}<span></span><span>(3)(animal)</span></span>, has been
            kicked out of <span className="field">{props.show.answer4}<span></span><span>(4)(mean person's name)</span></span> Obedience School. Training her/him was impossible. When
            she/he chewed up the <span className="field">{props.show.answer5}<span></span><span>(5)(item of furniture)</span></span> during orientation, we knew we were in trouble, In all
            our years, we have never seen such an uncooperative, <span className="field">{props.show.answer6}<span></span><span>(6)(adjective)</span></span> beast. She/he didn't even
            understand the "sit" and "stay" commands. When we said "sit", she/he would <span className="field">{props.show.answer7}<span></span><span>(7)(verb)</span></span>. and when
            we said "stay", she/he would <span className="field">{props.show.answer8}<span></span><span>(8)(verb)</span></span>. When told to "heel", she/he would hum
            <span className="field">{props.show.answer9}<span></span><span>(9)(song you don't like)</span></span>, and instead of rolling over, she/he danced the
            "<span className="field">{props.show.answer10}<span></span><span>(10)(kind of lunch meat)</span></span>-Shuffle" all over the school <span className="field">{props.show.answer11}<span></span><span>(11)(noun)</span></span>.
          </p>
          <p>
            She/he had trouble with classmates, too. She/he picked fights with our exchange student, a <span className="field">{props.show.answer12}<span></span><span>(12)(adjective)</span></span> <span className="field">{props.show.answer13}<span></span><span>(13)(jungle animal)</span></span>. Also, she/he ate another student, a <span className="field">{props.show.answer14}<span></span><span>(14)(adjective)</span></span>
            <span className="field">{props.show.answer15}<span></span><span>(15)(type of small pet)</span></span>. Lucky for us, nobody noticed.
          </p>
          <p>
            While <span className="field">{props.show.answer16}<span></span><span>(16)(name of pet)</span></span> is still not housebroken, she/he will now go only your 
            <span className="field">{props.show.answer17}<span></span><span>(17)(valuable household object)</span></span>. We are confident that she/he will attack only the eyebrows of
            <span className="field">{props.show.answer18}<span></span><span>(18)(name or person who regularly visit your home)</span></span>. Your pet is no <span className="field">{props.show.answer19}<span></span><span>(19)(name of famous animal)</span></span> but is
            perfectly capable of a healthy yet limited home life.
          </p>
          <p>
            Good luck with your <span className="field">{props.show.answer20}<span></span><span>(20)(adjective)</span></span> pet.
          </p>
          <p>You'll need it!</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Letter;
