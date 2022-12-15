import { User } from "../models/user.model.js" 
import { Student } from "../models/student.model.js" 
import { Class } from "../models/class.model.js" 

export const createUser = async (req, res) => {
    const user = {
      name: req.body.name,
      mobile_number: req.body.mobile_number,
      email: req.body.email,
    };

    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });

  };

  export const createClass = async (req, res) => {  
    const Clas = {
    subject: req.body.subject,
  }

  Class.create(Clas)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Class."
      });
    });

}

export const createStudent = async (req,res)=> {
  const student = {
    user_id: req.body.user_id,
    class_id: req.body.class_id,
  }

  Student.create(student)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Student."
      });
    });
}


export const findAllUsers = async (req, res) => {

  User.findAll({
    include: Student
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

export const findAllStudents = async (req, res) => {

  Student.findAll({
    include: [User,Class]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving students."
      });
    });
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

export const deleteStudent = async (req, res) => {
  const id = req.params.id;

  Student.destroy({
    where: { user_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Student was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Student with user id=${id}. Maybe Student was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Student with user id=" + id
      });
    });
};

export const updateUser = async (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

