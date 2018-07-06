import React, { Component } from 'react';

import Button from 'components/Button';

import './TermsOfService.scss';

export class TermsOfService extends Component {

	render () {
		return (
				<div className="terms-of-service rich-text small">
					<h1>Non enim, si omnia non sequebatur, idcirco non erat ortus illinc.</h1>

					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Honesta oratio, Socratica, Platonis etiam. Sapiens autem semper beatus est et est aliquando in dolore; Si longus, levis. Duo Reges: constructio interrete. Istam voluptatem perpetuam quis potest praestare sapienti? Sed quid attinet de rebus tam apertis plura requirere? Qua tu etiam inprudens utebare non numquam. Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis. </p>

					<ul>
						<li>Hoc unum Aristo tenuit: praeter vitia atque virtutes negavit rem esse ullam aut fugiendam aut expetendam.</li>
						<li>At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis, inquit;</li>
						<li>De quibus etsi a Chrysippo maxime est elaboratum, tamen a Zenone minus multo quam ab antiquis;</li>
						<li>Quod autem ratione actum est, id officium appellamus.</li>
						<li>Non potes, nisi retexueris illa.</li>
					</ul>


					<p>Vidit Homerus probari fabulam non posse, si cantiunculis tantus irretitus vir teneretur; Ita enim vivunt quidam, ut eorum vita refellatur oratio. <a href='http://loripsum.net/' target='_blank'>Id Sextilius factum negabat.</a> Sin dicit obscurari quaedam nec apparere, quia valde parva sint, nos quoque concedimus; Quae ista amicitia est? Omnes enim iucundum motum, quo sensus hilaretur. Quid censes in Latino fore? Primum quid tu dicis breve? </p>

					<ol>
						<li>Cur fortior sit, si illud, quod tute concedis, asperum et vix ferendum putabit?</li>
						<li>Mihi enim satis est, ipsis non satis.</li>
						<li>Sed ad haec, nisi molestum est, habeo quae velim.</li>
						<li>Tu enim ista lenius, hic Stoicorum more nos vexat.</li>
						<li>Cum autem venissemus in Academiae non sine causa nobilitata spatia, solitudo erat ea, quam volueramus.</li>
					</ol>


					<p><b>Sin aliud quid voles, postea.</b> Quid turpius quam sapientis vitam ex insipientium sermone pendere? Quid, quod homines infima fortuna, nulla spe rerum gerendarum, opifices denique delectantur historia? Teneo, inquit, finem illi videri nihil dolere. </p>

					<p>Mihi vero, inquit, placet agi subtilius et, ut ipse dixisti, pressius. Sed plane dicit quod intellegit. Sed ad haec, nisi molestum est, habeo quae velim. Itaque contra est, ac dicitis; <a href='http://loripsum.net/' target='_blank'>Sed nimis multa.</a> <a href='http://loripsum.net/' target='_blank'>Quid me istud rogas?</a> Inde sermone vario sex illa a Dipylo stadia confecimus. </p>

					<p>Videsne quam sit magna dissensio? Expressa vero in iis aetatibus, quae iam confirmatae sunt. Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; Ita graviter et severe voluptatem secrevit a bono. Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. Nunc omni virtuti vitium contrario nomine opponitur. Ut necesse sit omnium rerum, quae natura vigeant, similem esse finem, non eundem. Quis istud, quaeso, nesciebat? Quam ob rem tandem, inquit, non satisfacit? Illud dico, ea, quae dicat, praeclare inter se cohaerere. Saepe ab Aristotele, a Theophrasto mirabiliter est laudata per se ipsa rerum scientia; Unum est sine dolore esse, alterum cum voluptate. </p>
					<div className="button-actions align-center mt-margin">
						<Button icon="check" label="I Accept" className="large" onClick={this.props.acceptTos} />
					</div>
				</div>
		);
	}
}

export default TermsOfService;
