package qa.gov.customs.notification.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity(name = "Dual")
@Table(name = "SYS.DUAL")
public class Dummy {
    @Id
    @Column(name = "DUMMY")
    private String dummy;
}