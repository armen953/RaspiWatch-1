-- DATABASE FOR TEST ON LOCAL
--
use raspiwatch
DROP TABLE IF EXISTS `security`;
CREATE TABLE `security` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `camera` int(11) DEFAULT NULL,
  `filename` char(80) NOT NULL,
  `frame` int(11) DEFAULT NULL,
  `file_type` int(11) DEFAULT NULL,
  `time_stamp` timestamp,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

INSERT INTO `security` 
VALUES (2,1,' /var/www/server/motionImage/minion.jpg',0,1,'2018-05-26 18:45:20'),
(3,1,'/var/www/server/motionImage/jcvd.jpg',0,1,'2018-05-26 18:45:20'),
(4,1,'/var/www/server/motionImage/rio.jpg',0,1,'2018-05-26 18:49:15'),
(5,1,'/var/www/server/motionImage/minion.jpg',0,8,'2018-05-26 18:49:15');


-- CREATE A ADMIN WITH : 

-- Login: root 
-- MDP: root
delete from Users where pseudo='root';
INSERT INTO Users (pseudo, email, password, admin, createdAt, updatedAt)
VALUES ('root','root@root.fr','$2a$08$TPeudJBApgZJiSYe8VmPd.In8DmSiOKmtnwvFvGEkTE7iRoSH/NVW',1,'2018-05-27 17:13:45','2018-05-27 17:13:45');
