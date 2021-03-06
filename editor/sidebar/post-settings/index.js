/**
 * External dependencies
 */
import { connect } from 'react-redux';

/**
 * WordPress dependencies
 */
import { __ } from 'i18n';
import Panel from 'components/panel';
import PanelHeader from 'components/panel/header';
import IconButton from 'components/icon-button';

/**
 * Internal Dependencies
 */
import './style.scss';
import PostStatus from '../post-status';
import PostExcerpt from '../post-excerpt';

const PostSettings = ( { toggleSidebar } ) => {
	return (
		<Panel>
			<PanelHeader label={ __( 'Post Settings' ) } >
				<div className="editor-sidebar-post-settings__icons">
					<IconButton icon="admin-settings" />
					<IconButton
						onClick={ toggleSidebar }
						icon="no-alt"
					/>
				</div>
			</PanelHeader>
			<PostStatus />
			<PostExcerpt />
		</Panel>
	);
};

export default connect(
	undefined,
	( dispatch ) => ( {
		toggleSidebar: () => dispatch( { type: 'TOGGLE_SIDEBAR' } ),
	} )
)( PostSettings );
