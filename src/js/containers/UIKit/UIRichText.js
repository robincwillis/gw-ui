import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

export default class UIRichText extends Component {

	render () {
		return (
      <section id="rich-text">
        <div className="container">
          <div className="float-grid">
            <div className="col-6">
              <h3>Rich Text</h3>
            </div>
            <div className="col-6">
              <div className="rich-text">
<h1>Animi enim quoque dolores percipiet omnibus partibus maiores quam corporis.</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ad populum me vocas, eum. Duo Reges: constructio interrete. <code>Venit ad extremum;</code> <mark>Sed quot homines, tot sententiae;</mark> </p>

<h3>Hoc ille tuus non vult omnibusque ex rebus voluptatem quasi mercedem exigit.</h3>

<p>Nunc de hominis summo bono quaeritur; <i>Beatus sibi videtur esse moriens.</i> <code>Praeclarae mortes sunt imperatoriae;</code> Zenonis est, inquam, hoc Stoici. </p>

<p>Quare conare, quaeso. Hic ambiguo ludimur. <mark>At certe gravius.</mark> Bonum valitudo: miser morbus. Ut id aliis narrare gestiant? Erit enim mecum, si tecum erit. Utram tandem linguam nescio? </p>

<pre>
Hoc autem loco tantum explicemus haec honesta, quae dico,
praeterquam quod nosmet ipsos diligamus, praeterea suapte
natura per se esse expetenda.

Quamquam non negatis nos intellegere quid sit voluptas, sed
quid ille dicat.
</pre>


<ol>
  <li>Ut pulsi recurrant?</li>
  <li>Quid est, quod ab ea absolvi et perfici debeat?</li>
  <li>Introduci enim virtus nullo modo potest, nisi omnia, quae leget quaeque reiciet, unam referentur ad summam.</li>
  <li>Non dolere, inquam, istud quam vim habeat postea videro;</li>
</ol>


<h2>Dolere malum est: in crucem qui agitur, beatus esse non potest.</h2>

<p>Vestri haec verecundius, illi fortasse constantius. Suo genere perveniant ad extremum; Quo modo? Etiam beatissimum? Quae duo sunt, unum facit. Sed ille, ut dixi, vitiose. </p>

<ul>
  <li>Cum praesertim illa perdiscere ludus esset.</li>
  <li>Quod idem cum vestri faciant, non satis magnam tribuunt inventoribus gratiam.</li>
  <li>Et homini, qui ceteris animantibus plurimum praestat, praecipue a natura nihil datum esse dicemus?</li>
  <li>Tollenda est atque extrahenda radicitus.</li>
  <li>Indicant pueri, in quibus ut in speculis natura cernitur.</li>
</ul>


<p><a href='http://loripsum.net/' target='_blank'>Non potes, nisi retexueris illa.</a> At hoc in eo M. <mark>Eam tum adesse, cum dolor omnis absit;</mark> <i>Magna laus.</i> </p>

<dl>
  <dt><dfn>Sint ista Graecorum;</dfn></dt>
  <dd>Tu enim ista lenius, hic Stoicorum more nos vexat.</dd>
  <dt><dfn>Quid adiuvas?</dfn></dt>
  <dd>Itaque hic ipse iam pridem est reiectus;</dd>
  <dt><dfn>Quid iudicant sensus?</dfn></dt>
  <dd>Nam, ut sint illa vendibiliora, haec uberiora certe sunt.</dd>
</dl>


<blockquote cite='http://loripsum.net'>
  Itaque prima illa commendatio, quae a natura nostri facta est nobis, incerta et obscura est, primusque appetitus ille animi tantum agit, ut salvi atque integri esse possimus.
</blockquote>

              </div>
            </div>
          </div>
        </div>
      </section>
		);
	}
}