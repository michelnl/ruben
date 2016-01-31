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

    public function getProject($id) {
        $this->db->select('*');
        $this->db->where('id', $id);
        $query = $this->db->get('projects');
        return $query->result();
    }

    public function deleteProject($id) {
        $this->db->where('id', $id);
        $this->db->delete('projects');
    }

    public function createProject($data) {
        $this->db->insert('projects', $data);
        return $this->db->insert_id();
    }

    public function updateProject($data) {
        $this->db->where(array('id' => $data['id']));
        $this->db->update('projects', $data);
    }

}