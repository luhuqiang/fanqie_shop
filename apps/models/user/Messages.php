<?php if (! defined ( 'BASEPATH' ))	exit ( 'No direct script access allowed' );
/**
 * 消息管理
 * @author chaituan@126.com
 */

class Messages extends MY_Model {
	
	function __construct(){
		parent::__construct ();
		$this->table_name = 'message';
	}


}