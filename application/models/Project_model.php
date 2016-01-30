<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Project_model extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
    }

    public function getProjects() {
        $this->db->select('*');
        $query = $this->db->get('projects');
        return $query->result();
    }

}