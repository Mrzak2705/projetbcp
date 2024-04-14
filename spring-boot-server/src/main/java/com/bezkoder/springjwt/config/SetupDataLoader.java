package com.bezkoder.springjwt.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import com.bezkoder.springjwt.models.ERole;
import com.bezkoder.springjwt.models.Role;
import com.bezkoder.springjwt.repository.RoleRepository;

import javax.transaction.Transactional;
import java.util.Optional;

@Component
public class SetupDataLoader {

    @Autowired
    private RoleRepository roleRepository;

    @Transactional
    @EventListener
    public void onApplicationEvent(ContextRefreshedEvent event) {
        createRoleIfNotFound(ERole.ROLE_USER);
        createRoleIfNotFound(ERole.ROLE_MODERATOR);
        createRoleIfNotFound(ERole.ROLE_ADMIN);
    }

    private void createRoleIfNotFound(ERole name) {
        Optional<Role> role = roleRepository.findByName(name);
        if (!role.isPresent()) {
            roleRepository.save(new Role(name));
        }
    }
}
