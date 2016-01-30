<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';

class Project extends REST_Controller
{

    function __construct()
    {
        // Construct the parent class
        parent::__construct();
        $this->load->model('project_model');
    }

    public function index_get()
    {
        $result = $this->project_model->getProjects();

        $projects['data'] = array();
        foreach($result as $project) {
            $data['id'] = $project->id;
            $data['name'] = $project->name;
            $data['description'] = $project->description;
            $data['created_on'] = $project->created_on;
            array_push($projects['data'], $data);
        }

        $this->set_response($projects, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
    }

}