import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Button from '../Button/Button';
import Input from '../Input/Input';
// import DataTest from './DataTest'

import RightArrow from '../Icons/ArrowRight';
import EditIcon from '../Icons/Edit';
import CheckIcon from '../Icons/Check';
import MoreIcon from '../Icons/More';
import TrashIcon from '../Icons/Trash';
import CirclePlus from '../Icons/PlusCircle';

export default class UIGrid extends Component {

	render () {
		return (
			<section id="data">
        <div className="container wide">
          <h5>Standard Table/List</h5>
          <ul className="ui-list">
            <li className="row list-header">
              <div className="cell">
                <div className="data">Data Title</div>
              </div>
              <div className="cell sorted-by">
                <div className="data">Number of Datas</div>
              </div>
              <div className="cell">
                <div className="data">Soup/Deliciousness</div>
              </div>
              <div className="cell">
                <div className="data">Nonsense</div>
              </div>
            </li>
            <li className="row">
              <div className="cell">
                <div className="data">A Piece of Date 30, 17, 24</div>
              </div>
              <div className="cell">
                <div className="data">Data 2</div>
              </div>
              <div className="cell">
                <div className="data">Miso Soup is Delicious</div>
              </div>
              <div className="cell">
                <div className="data">Crownsourcing</div>
              </div>
            </li>
            <li className="row">
              <div className="cell">
                <div className="data">A Piece of Date 30, 17, 24</div>
              </div>
              <div className="cell">
                <div className="data">1922</div>
              </div>
              <div className="cell">
                <div className="data">Alfred Pennyworth, Chicken Noodle, Catherine Zita-Jones</div>
              </div>
              <div className="cell">
                <div className="data">Unity</div>
              </div>
            </li>
            <li className="row">
              <div className="cell">
                <div className="data"><a href="#">Another Piece of Date 30, 17, 24, 2017, 97</a></div>
                <div className="data secondary">A little extra info</div>
              </div>
              <div className="cell">
                <div className="data">1922</div>
              </div>
              <div className="cell">
                <div className="data">Chicken Noodle</div>
              </div>
              <div className="cell">
                <div className="data">Unity</div>
              </div>
            </li>
          </ul>

          <h5>Tight Table/List</h5>
          <p>Add a class of <code>.tight</code> to <code>.ui-list</code></p>
          <ul className="ui-list tight">
            <li className="row list-header">
              <div className="cell no-grow">
                <Input
                  inputType="checkbox"
                  inputName="selectRow"
                  inputValue="Select All"
                  hideLabel="true"
                />
              </div>
              <div className="cell">
                <div className="data">Data Title</div>
              </div>
              <div className="cell sorted-by">
                <div className="data">Number of Datas</div>
              </div>
              <div className="cell">
                <div className="data">Soup/Deliciousness</div>
              </div>
              <div className="cell">
                <div className="data">Nonsense</div>
              </div>
            </li>
            <li className="row">
              <div className="cell no-grow">
                <Input
                  inputType="checkbox"
                  inputName="selectRow"
                  inputValue="Row 1"
                  hideLabel="true"
                />
              </div>
              <div className="cell">
                <div className="data">A Piece of Date 30, 17, 24</div>
              </div>
              <div className="cell">
                <div className="data">Data 2</div>
              </div>
              <div className="cell">
                <Input
                  inputClass="minimal"
                  inputType="select"
                  options={[
                    'Minimal Select',
                    'Option',
                    'Another Option'
                  ]}
                />
              </div>
              <div className="cell">
                <div className="data">Crownsourcing</div>
              </div>
            </li>
            <li className="row">
              <div className="cell no-grow">
                <Input
                  inputType="checkbox"
                  inputName="selectRow"
                  inputValue="Row 2"
                  hideLabel="true"
                />
              </div>
              <div className="cell">
                <div className="data">A Piece of Date 30, 17, 24</div>
              </div>
              <div className="cell">
                <div className="data">1922</div>
              </div>
              <div className="cell">
                <Input
                  inputClass="minimal"
                  inputType="typeahead"
                  options={[
                    'So Minimal',
                    'Option',
                    'Another Longer Option'
                  ]}
                />
              </div>
              <div className="cell">
                <div className="data">Unity</div>
              </div>
            </li>
            <li className="row">
              <div className="cell no-grow">
                <Input
                  inputType="checkbox"
                  inputName="selectRow"
                  inputValue="Row 3"
                  hideLabel="true"
                />
              </div>
              <div className="cell">
                <div className="data"><a href="#">Another Piece of Date 2017</a></div>
              </div>
              <div className="cell">
                <div className="data">1922</div>
              </div>
              <div className="cell">
                <Input
                  inputType="toggle"
                  inputName="selectRow"
                  inputValue="Row 4"
                  offLabel="Unpaid"
                  onLabel="Paid"
                />
              </div>
              <div className="cell">
                <div className="data">Unity</div>
              </div>
            </li>
          </ul>

          <h5 className="section-title">List Items with Avatars</h5>
          <ul className="ui-list">
            <li className="row">
              <div className="cell no-grow">
                <span className="avatar">R</span>
              </div>
              <div className="cell">
                <div className="data"><strong>Robin Willis</strong></div>
              </div>
              <div className="cell">
                <Input
                  inputClass="small"
                  rightIcon={CirclePlus}
                  placeholder="Use small inputs in the list"
                />
              </div>
              <div className="cell align-right">
                <Button
                  buttonClass="small tertiary circle transparent"
                  icon={EditIcon}
                  data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                  data-tooltip-paragraph="true"
                />
                <Button
                  buttonClass="small tertiary circle transparent"
                  icon={TrashIcon}
                  data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                  data-tooltip-paragraph="true"
                />
                <Button
                  buttonClass="small tertiary circle transparent"
                  icon={CheckIcon}
                  data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                  data-tooltip-paragraph="true"
                />
                <Button
                  buttonClass="small tertiary circle transparent"
                  icon={MoreIcon}
                  data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                  data-tooltip-paragraph="true"
                />
              </div>
            </li>
            <li className="row">
              <div className="cell no-grow">
                <span className="avatar">M</span>
              </div>
              <div className="cell">
                <div className="data"><strong>Matthew Gordils</strong></div>
                <div className="data secondary">Designer</div>
              </div>
              <div className="cell">
                <span className="data wrap">A piece of data so long it must wrap onto multiple lines even at larger widths. Its Crazy how long this data is</span>
              </div>
              <div className="cell align-right">
                <Button
                  buttonClass="small tertiary"
                  label="View User"
                  rightIcon={RightArrow}
                  data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                  data-tooltip-paragraph="true"
                />
              </div>
            </li>
            <li className="row">
              <div className="cell no-grow">
                <span className="avatar">X</span>
              </div>
              <div className="cell">
                <div className="data"><strong>Secret Ingredient</strong></div>
                <div className="data secondary">Potato</div>
              </div>
              <div className="cell">
                <span className="data wrap">It's no secret that potatos are wonderful.</span>
              </div>
              <div className="cell align-right">
                <Button
                  buttonClass="small tertiary"
                  label="View User"
                  rightIcon={RightArrow}
                  data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                  data-tooltip-paragraph="true"
                />
              </div>
            </li>
            <li className="row">
              <div className="cell">
                <div className="data truncate">
                  Add a class of .truncate to the cell's data. This will truncate the text so it dot dot dots out of the cell instead of wraps
                </div>
              </div>
              <div className="cell">
                <div className="data">A piece of data that is does not wrap an has more data than the length it is allowed</div>
              </div>
              <div className="cell">
                <div className="data">A piece of data that is longer and wraps</div>
              </div>
            </li>
          </ul>

          <div className="float-grid">
            <div className="col-6">
              <h5>Minimal List</h5>
              <ul className="ui-list minimal links">
                <li className="row">
                  <div className="cell no-grow">
                    <span className="avatar">R</span>
                  </div>
                  <div className="cell">
                    <div className="data"><strong>Robin Willis</strong></div>
                  </div>
                  <div className="cell no-grow">
                    <Button
                      buttonClass="small tertiary circle transparent"
                      icon={EditIcon}
                      data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                      data-tooltip-paragraph="true"
                    />
                    <Button
                      buttonClass="small tertiary circle transparent"
                      icon={TrashIcon}
                      data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                      data-tooltip-paragraph="true"
                    />
                    <Button
                      buttonClass="small tertiary circle transparent"
                      icon={CheckIcon}
                      data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                      data-tooltip-paragraph="true"
                    />
                    <Button
                      buttonClass="small tertiary circle transparent"
                      icon={MoreIcon}
                      data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                      data-tooltip-paragraph="true"
                    />
                  </div>
                </li>
                <li className="row">
                  <div className="cell no-grow">
                    <span className="avatar">M</span>
                  </div>
                  <div className="cell">
                    <div className="data"><strong>Matthew Gordils</strong></div>
                    <div className="data secondary">Designer</div>
                  </div>
                  <div className="cell no-grow">
                    <Button
                      buttonClass="small tertiary circle transparent"
                      icon={EditIcon}
                      data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                      data-tooltip-paragraph="true"
                    />
                    <Button
                      buttonClass="small tertiary circle transparent"
                      icon={TrashIcon}
                      data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                      data-tooltip-paragraph="true"
                    />
                    <Button
                      buttonClass="small tertiary circle transparent"
                      icon={CheckIcon}
                      data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                      data-tooltip-paragraph="true"
                    />
                    <Button
                      buttonClass="small tertiary circle transparent"
                      icon={MoreIcon}
                      data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                      data-tooltip-paragraph="true"
                    />
                  </div>
                </li>
                <li className="row">
                  <div className="cell no-grow">
                    <span className="avatar">X</span>
                  </div>
                  <div className="cell">
                    <div className="data"><strong>Secret Ingredient</strong></div>
                    <div className="data secondary">Potato</div>
                  </div>
                  <div className="cell no-grow">
                    <Button
                      buttonClass="small tertiary circle transparent"
                      icon={EditIcon}
                      data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                      data-tooltip-paragraph="true"
                    />
                    <Button
                      buttonClass="small tertiary circle transparent"
                      icon={TrashIcon}
                      data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                      data-tooltip-paragraph="true"
                    />
                    <Button
                      buttonClass="small tertiary circle transparent"
                      icon={CheckIcon}
                      data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                      data-tooltip-paragraph="true"
                    />
                    <Button
                      buttonClass="small tertiary circle transparent"
                      icon={MoreIcon}
                      data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                      data-tooltip-paragraph="true"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>  
        </div>
      </section>
		);
	}
}