package qa.gov.custom.user.entity;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "ROLE")
public class Role {
    static final long serialVersionUID = 1L;
    @Id
    @Column(name = "ID")
    private BigInteger id;
    @Column(name = "NAME")
    private String name;

    @Column(name = "REMARK")
    private String remark;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "PERMISSION_ROLE",joinColumns = {@JoinColumn(name = "ROLE_ID",referencedColumnName = "ID")},
               inverseJoinColumns = {@JoinColumn(name = "PERMISSION_ID",referencedColumnName = "ID" )})
    private List<Permission> permissions;


    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Role role = (Role) o;
        return Objects.equals(id, role.id) &&
                Objects.equals(name, role.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public List<Permission> getPermissions() {
        return permissions;
    }

    public void setPermissions(List<Permission> permissions) {
        this.permissions = permissions;
    }
}
