package qa.gov.customs.authentication.entity;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Permission {
    static final long serialVersionUID = 1L;
    private BigInteger id;
    private String name;
    private Collection<PermissionRole> permissionRolesById;

    @Id
    @Column(name = "ID")
    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    @Basic
    @Column(name = "NAME")
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
        Permission that = (Permission) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(name, that.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }

    @OneToMany(mappedBy = "permissionByPermissionId")
    public Collection<PermissionRole> getPermissionRolesById() {
        return permissionRolesById;
    }

    public void setPermissionRolesById(Collection<PermissionRole> permissionRolesById) {
        this.permissionRolesById = permissionRolesById;
    }
}
