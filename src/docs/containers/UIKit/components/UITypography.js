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
						<code>@import "{}/node_modules/gw-ui/dist/sass/typography.scss";</code>
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
							<p className="light-text-color">ie: Only one <code>h1</code> tag should be used per page</p>
						</div>
					}
				/>

				<div className="grid-flex v-spaced-tight baseline">
					<div className="col-4 align-right">
						<code className="light-text-color">{'<h1>'} or .h1</code>
					</div>
					<div className="col-8"><h1>Header No.1</h1></div>

					<div className="col-4 align-right">
						<code className="light-text-color">{'<h2>'} or .h2</code>
					</div>
					<div className="col-8"><h2>Header No.2</h2></div>
					
					<div className="col-4 align-right">
						<code className="light-text-color">{'<h3>'} or .h3</code>
					</div>
					<div className="col-8"><h3>Header No.3</h3></div>
					
					<div className="col-4 align-right">
						<code className="light-text-color">{'<h4>'} or .h4</code>
					</div>
					<div className="col-8"><h4>Header No.4</h4></div>
					
					<div className="col-4 align-right">
						<code className="light-text-color">{'<h5>'} or .h5</code>
					</div>
					<div className="col-8"><h5>Header No.5</h5></div>
					
					<div className="col-4 align-right">
						<code className="light-text-color">{'<h6>'} or .h6</code>
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
<h1>Quod autem in homine praestantissimum atque optimum est, id deseruit.</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Memini vero, inquam; Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Cur, nisi quod turpis oratio est? Quaesita enim virtus est, non quae relinqueret naturam, sed quae tueretur. Cur fortior sit, si illud, quod tute concedis, asperum et vix ferendum putabit? Ita ne hoc quidem modo paria peccata sunt. Hoc est non modo cor non habere, sed ne palatum quidem. </p>

<blockquote cite="http://loripsum.net">
	Virtutibus igitur rectissime mihi videris et ad consuetudinem nostrae orationis vitia posuisse contraria.
</blockquote>


<ol>
	<li>Ita enim vivunt quidam, ut eorum vita refellatur oratio.</li>
	<li>Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus;</li>
	<li>Idemne, quod iucunde?</li>
	<li>Ne amores quidem sanctos a sapiente alienos esse arbitrantur.</li>
</ol>


<ul>
	<li>Ut placet, inquit, etsi enim illud erat aptius, aequum cuique concedere.</li>
	<li>Tu enim ista lenius, hic Stoicorum more nos vexat.</li>
	<li>Istam voluptatem perpetuam quis potest praestare sapienti?</li>
	<li>Quod cum ille dixisset et satis disputatum videretur, in oppidum ad Pomponium perreximus omnes.</li>
</ul>


<pre>Homines optimi non intellegunt totam rationem everti, si ita
res se habeat.

Si ista mala sunt, in quae potest incidere sapiens,
sapientem esse non esse ad beate vivendum satis.
</pre>


<p>Nam si quae sunt aliae, falsum est omnis animi voluptates esse e corporis societate. Aliter enim nosmet ipsos nosse non possumus. Ad eos igitur converte te, quaeso. Quis istud possit, inquit, negare? Cur post Tarentum ad Archytam? Mihi enim satis est, ipsis non satis. In qua quid est boni praeter summam voluptatem, et eam sempiternam? Consequatur summas voluptates non modo parvo, sed per me nihilo, si potest; Sic enim censent, oportunitatis esse beate vivere. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. </p>

<dl>
	<dt><dfn>Non igitur bene.</dfn></dt>
	<dd>Alia quaedam dicent, credo, magna antiquorum esse peccata, quae ille veri investigandi cupidus nullo modo ferre potuerit.</dd>
	<dt><dfn>Confecta res esset.</dfn></dt>
	<dd>An vero, inquit, quisquam potest probare, quod perceptfum, quod.</dd>
	<dt><dfn>Nihilo magis.</dfn></dt>
	<dd>Hic, qui utrumque probat, ambobus debuit uti, sicut facit re, neque tamen dividit verbis.</dd>
	<dt><dfn>Quo modo?</dfn></dt>
	<dd>Quam ob rem tandem, inquit, non satisfacit?</dd>
</dl>
						</div>
					}
				/>
				<div className="grid-flex right">
					<div className="col-8">
						<div id="RichText" className="rich-text">

						</div>
					</div>
				</div>

			</Section>
		);
	}
}

export default UIInputs;