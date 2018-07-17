import React, { Component } from 'react';

import Input from 'components/Input';
import Section from './UISection'
import SubSection from './UISubSection'

export class UIInputs extends Component {

	defaultModal = () => {
		this.props.modalActions.showModal('default-modal');
	}

	render() {

		return (
			<Section 
				id={this.props.id}
				key={this.props.id}
				title="Typography"
				description={
					<div>
						<p>Typography in interactive applications can be one of the most useful tools. This is how to use our base setup</p>
					</div>
				}
			>
				<SubSection
					title="Headers"
					id={this.props.id + "Headers"}
					description={
						<div>
							<p>The header font sizes for h1-6 and paragraphs, font weights, line heights, and letter spacing can all be adjusted easily in the <code>variables.scss</code> stylesheet</p>
							<p>Sometimes you want elements to look and act like headers, but for SEO or other reasons, the <code>H</code> tags shouldn't be used</p>
							<p className="light-text-color medium-weight">ie: Only one <code>h1</code> tag should be used per page</p>
						</div>
					}
				/>

				<div className="grid-flex v-spaced-tight baseline">
					<div className="col-4 align-right">
						<code className="light-text-color">{'<h1>'} or .h1</code>
					</div>
					<div className="col-8"><h1>Header No.1</h1></div>
					<div className="col-4 align-right">
						<code className="light-text-color">{'<h2>'} or .h1</code>
					</div>
					<div className="col-8"><h2>Header No.2</h2></div>
					<div className="col-4 align-right">
						<code className="light-text-color">{'<h3>'} or .h1</code>
					</div>
					<div className="col-8"><h3>Header No.3</h3></div>
					<div className="col-4 align-right">
						<code className="light-text-color">{'<h4>'} or .h1</code>
					</div>
					<div className="col-8"><h4>Header No.4</h4></div>
					<div className="col-4 align-right">
						<code className="light-text-color">{'<h5>'} or .h1</code>
					</div>
					<div className="col-8"><h5>Header No.5</h5></div>
					<div className="col-4 align-right">
						<code className="light-text-color">{'<h6>'} or .h1</code>
					</div>
					<div className="col-8"><h6>Header No.6</h6></div>
				</div>

				<SubSection
					title="Paragraphs"
					id={this.props.id + "Paragraphs"}
					description={
						<div>
							<p>There are 3 paragraph sizes and can be used by either wrapping a <code>p</code> with a <code>.sm</code>, <code>.md</code>, or <code>.lg</code> class or adding the class directly onto the <code>p</code></p>
						</div>
					}
				/>

				<div className="grid-flex v-spaced baseline">
					<div className="col-4 align-right"><code className="light-text-color">p.sm</code></div>
					<div className="col-8"><p className="sm max-text-width">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tertium autem omnibus aut maximis rebus iis, quae secundum naturam sint, fruentem vivere. Quae cum dixisset, finem ille. Videmus igitur ut conquiescere ne infantes quidem possint. Hoc loco tenere se Triarius non potuit. Ergo id est convenienter naturae vivere, a natura discedere. Traditur, inquit, ab Epicuro ratio neglegendi doloris.</p></div>

					<div className="col-4 align-right"><code className="light-text-color">p</code></div>
					<div className="col-8"><p className="max-text-width">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tertium autem omnibus aut maximis rebus iis, quae secundum naturam sint, fruentem vivere. Quae cum dixisset, finem ille. Videmus igitur ut conquiescere ne infantes quidem possint. Hoc loco tenere se Triarius non potuit. Ergo id est convenienter naturae vivere, a natura discedere. Traditur, inquit, ab Epicuro ratio neglegendi doloris.</p></div>

					<div className="col-4 align-right"><code className="light-text-color">p.md</code></div>
					<div className="col-8"><p className="md max-text-width">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tertium autem omnibus aut maximis rebus iis, quae secundum naturam sint, fruentem vivere. Quae cum dixisset, finem ille. Videmus igitur ut conquiescere ne infantes quidem possint. Hoc loco tenere se Triarius non potuit. Ergo id est convenienter naturae vivere, a natura discedere. Traditur, inquit, ab Epicuro ratio neglegendi doloris.</p></div>

					<div className="col-4 align-right"><code className="light-text-color">p.lg</code></div>
					<div className="col-8"><p className="lg max-text-width">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tertium autem omnibus aut maximis rebus iis, quae secundum naturam sint, fruentem vivere. Quae cum dixisset, finem ille. Videmus igitur ut conquiescere ne infantes quidem possint. Hoc loco tenere se Triarius non potuit. Ergo id est convenienter naturae vivere, a natura discedere. Traditur, inquit, ab Epicuro ratio neglegendi doloris.</p></div>
				</div>

				<SubSection
					title="Rich Text"
					id={this.props.id + "RichText"}
					description={
						<div>
							<p>Dump it text...WIP</p>
						</div>
					}
				/>
				<div className="grid-flex right">
					<div className="col-8">
						<div id="RichText" className="rich-text">
							<h1>Quid est enim aliud esse versutum?</h1>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aperiendum est igitur, quid sit voluptas; Hos contra singulos dici est melius. <i>Duo Reges: constructio interrete.</i> Quis suae urbis conservatorem Codrum, quis Erechthei filias non maxime laudat? Nihil opus est exemplis hoc facere longius. Universa enim illorum ratione cum tota vestra confligendum puto. </p>

							<h3>Quod totum contra est.</h3>

							<p>Beatus autem esse in maximarum rerum timore nemo potest. Venit enim mihi Platonis in mentem, quem accepimus primum hic disputare solitum; Aliena dixit in physicis nec ea ipsa, quae tibi probarentur; </p>

							<p>Aliis esse maiora, illud dubium, ad id, quod summum bonum dicitis, ecquaenam possit fieri accessio. <mark>Cyrenaici quidem non recusant;</mark> Cupiditates non Epicuri divisione finiebat, sed sua satietate. Utrum igitur tibi litteram videor an totas paginas commovere? <a href="http://loripsum.net/" target="_blank">Quis istum dolorem timet?</a> Ait enim se, si uratur, Quam hoc suave! dicturum. Non pugnem cum homine, cur tantum habeat in natura boni; Qui ita affectus, beatum esse numquam probabis; <code>Tum Torquatus: Prorsus, inquit, assentior;</code> Ita prorsus, inquam; Traditur, inquit, ab Epicuro ratio neglegendi doloris. </p>

							<pre>Tum ille: Finem, inquit, interrogandi, si videtur, quod
							quidem ego a principio ita me malle dixeram hoc ipsum
							providens, dialecticas captiones.

							Quod ea non occurrentia fingunt, vincunt Aristonem;
							</pre>


							<dl>
								<dt><dfn>Sedulo, inquam, faciam.</dfn></dt>
								<dd>Vos autem cum perspicuis dubia debeatis illustrare, dubiis perspicua conamini tollere.</dd>
								<dt><dfn>Avaritiamne minuis?</dfn></dt>
								<dd>At enim, qua in vita est aliquid mali, ea beata esse non potest.</dd>
								<dt><dfn>Ut pulsi recurrant?</dfn></dt>
								<dd>Illud mihi a te nimium festinanter dictum videtur, sapientis omnis esse semper beatos;</dd>
								<dt><dfn>Sit sane ista voluptas.</dfn></dt>
								<dd>Bonum liberi: misera orbitas.</dd>
								<dt><dfn>Nos commodius agimus.</dfn></dt>
								<dd>Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum.</dd>
							</dl>


							<h2>Sed in rebus apertissimis nimium longi sumus.</h2>

							<p><code>Huius, Lyco, oratione locuples, rebus ipsis ielunior.</code> Certe, nisi voluptatem tanti aestimaretis. <i>Minime vero istorum quidem, inquit.</i> Praeterea sublata cognitione et scientia tollitur omnis ratio et vitae degendae et rerum gerendarum. Quoniam, si dis placet, ab Epicuro loqui discimus. Omnia peccata paria dicitis. </p>

							<p>Videamus animi partes, quarum est conspectus illustrior; <b>Ut id aliis narrare gestiant?</b> Si mala non sunt, iacet omnis ratio Peripateticorum. Equidem etiam Epicurum, in physicis quidem, Democriteum puto. <b>Quid censes in Latino fore?</b> Quod maxime efficit Theophrasti de beata vita liber, in quo multum admodum fortunae datur. <b>Itaque haec cum illis est dissensio, cum Peripateticis nulla sane.</b> At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis, inquit; Ut id aliis narrare gestiant? Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere? </p>

							<hr/>

							<p>Si est nihil nisi corpus, summa erunt illa: valitudo, vacuitas doloris, pulchritudo, cetera. Idemne potest esse dies saepius, qui semel fuit? <a href="http://loripsum.net/" target="_blank">Negare non possum.</a> <code>Tum ille: Ain tandem?</code> Tum ille timide vel potius verecunde: Facio, inquit. Deque his rebus satis multa in nostris de re publica libris sunt dicta a Laelio. Tenent mordicus. Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. Summum ením bonum exposuit vacuitatem doloris; Occultum facinus esse potuerit, gaudebit; <mark>Sed quot homines, tot sententiae;</mark> <b>Quare conare, quaeso.</b> </p>
							
							<blockquote cite="http://loripsum.net">
								Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali.
							</blockquote>


							<p><a href="http://loripsum.net/" target="_blank">Ego vero isti, inquam, permitto.</a> Hoc loco tenere se Triarius non potuit. <mark>Rhetorice igitur, inquam, nos mavis quam dialectice disputare?</mark> Quid enim necesse est, tamquam meretricem in matronarum coetum, sic voluptatem in virtutum concilium adducere? <b>Primum quid tu dicis breve?</b> Oculorum, inquit Plato, est in nobis sensus acerrimus, quibus sapientiam non cernimus. Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. Eadem nunc mea adversum te oratio est. Nam Pyrrho, Aristo, Erillus iam diu abiecti. <mark>Pauca mutat vel plura sane;</mark> </p>

							<p>Videamus animi partes, quarum est conspectus illustrior; <b>Ut id aliis narrare gestiant?</b> Si mala non sunt, iacet omnis ratio Peripateticorum. Equidem etiam Epicurum, in physicis quidem, Democriteum puto. <b>Quid censes in Latino fore?</b> Quod maxime efficit Theophrasti de beata vita liber, in quo multum admodum fortunae datur. <b>Itaque haec cum illis est dissensio, cum Peripateticis nulla sane.</b> At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis, inquit; Ut id aliis narrare gestiant? Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere? </p>

							<p>Si est nihil nisi corpus, summa erunt illa: valitudo, vacuitas doloris, pulchritudo, cetera. Idemne potest esse dies saepius, qui semel fuit? <a href="http://loripsum.net/" target="_blank">Negare non possum.</a> <code>Tum ille: Ain tandem?</code> Tum ille timide vel potius verecunde: Facio, inquit. Deque his rebus satis multa in nostris de re publica libris sunt dicta a Laelio. Tenent mordicus. Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. Summum ením bonum exposuit vacuitatem doloris; Occultum facinus esse potuerit, gaudebit; <mark>Sed quot homines, tot sententiae;</mark> <b>Quare conare, quaeso.</b> </p>

							<ul>
								<li>At Zeno eum non beatum modo, sed etiam divitem dicere ausus est.</li>
								<li>Aliud est enim poëtarum more verba fundere, aliud ea, quae dicas, ratione et arte distinguere.</li>
							</ul>


							<ol>
								<li>Quod praeceptum quia maius erat, quam ut ab homine videretur, idcirco assignatum est deo.</li>
								<li>Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret?</li>
								<li>Cave putes quicquam esse verius.</li>
								<li>Itaque hic ipse iam pridem est reiectus;</li>
							</ol>
	
						</div>
					</div>
				</div>

			</Section>
		);
	}
}

export default UIInputs;