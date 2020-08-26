package com.example.demo.entities

import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import javax.persistence.CollectionTable
import javax.persistence.ElementCollection
import javax.persistence.Entity
import javax.persistence.EnumType
import javax.persistence.Enumerated
import javax.persistence.FetchType
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.JoinColumn

@Entity
class User(
        @Id @GeneratedValue
        var id: Long,
        private var username: String,
        private var password: String,
        var phone: String,
        @ElementCollection(targetClass = Role::class, fetch = FetchType.EAGER)
        @CollectionTable(name = "user_role", joinColumns = [JoinColumn(name = "user_id")])
        @Enumerated(EnumType.STRING)
        private var roles: Set<Role> = HashSet()) : UserDetails {

    override fun getAuthorities(): Collection<GrantedAuthority?>? {
        return roles
    }

    override fun isEnabled(): Boolean {
        return true
    }

    override fun getUsername(): String {
        return username
    }

    override fun isCredentialsNonExpired(): Boolean {
        return true
    }

    override fun getPassword(): String {
        return password
    }

    override fun isAccountNonExpired(): Boolean {
        return true
    }

    override fun isAccountNonLocked(): Boolean {
        return true
    }

    fun setUsername(username: String) {
        this.username = username
    }

    fun setAuthorities(roles: Set<Role>) {
        this.roles = roles
    }

    fun setPassword(password: String) {
        this.password = password
    }
}

