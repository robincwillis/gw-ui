
//util

export * as storage from './util/storage';

// Inputs

export Button from './components/Button';
export Input from './components/Input'; // rewrite styles
export TextArea from './components/TextArea';
export Select from './components/Select';
export Checkbox from './components/Checkbox';
export Radio from './components/Radio';

// Custom Inputs

export Toggle from './components/Toggle';
export ContentEditable from 'components/ContentEditable';
export EditableItem from 'components/EditableItem';
export Typeahead from 'components/Typeahead';
export FileUpload from './components/FileUpload';
export AddContentBetween from './components/AddContentBetween';

// Table REPLACE WITH UNIVERS COMPNOENT
import Table from './components/Table';

export Table, {
	Column,
	Row,
	Cell,
	ImageCell,
	ActionCell,
	AvatarCell,
	NestedCell,
	SelectCell,
	DateCell,
	ButtonCell
} from './components/Table';

// Loaders
export Loader, {
	DotLoader,
	LinearLoader,
	TextLoader
} from './components/Loader';

// ========================================
// EVERYTHING BELOW HERE IS EXPERIMENTAL
// ========================================


// Layout

export Tabs from './components/Tabs';
export Collapse from './components/Collapse';
export Accordion from './components/Accordion';
export CenteredForm from './components/CenteredForm';

// Per App
// export Header from './components/Header';
// export Sidebar from './components/Sidebar';

// Lists
export ImageList from './components/ImageList';

// Misc
export Avatar from './components/Avatar';
export Card from './components/Card';
export TermsOfService from './components/TermsOfService';
export Video from './components/Video';

// ========================================
// TODO
// These components have dependencies that we are not sure we want to commit to yet
// ========================================

export DatePicker from './components/DatePicker';
//export Calendar from 'components/Calendar';
//export CalendarKey from 'components/CalendarKey';

//Popper Dependant
//export Popup from './components/Popup';

// Redux Dependant
//export Modal from './components/Modal';
// export Drawer from './components/Drawer';
//export Notifications from './components/Notifications';


// ——————— Seperate into another package?

//Stripe Dependant — gw-ui-stripe
//export StripeCard from './components/StripeCard';

//D3 Dependant — gw-ui-graphs
//export Graph from './components/Graph';

//React Highlight Dependant — gw-ui-code
//export CodeBlock from './components/CodeBlock';