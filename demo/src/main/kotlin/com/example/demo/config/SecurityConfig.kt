package com.example.demo.config

import com.example.demo.services.CustomUserDetailsService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.crypto.password.NoOpPasswordEncoder
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.CorsConfigurationSource
import org.springframework.web.cors.UrlBasedCorsConfigurationSource

@Configuration
@EnableWebSecurity
class SecurityConfig(val customUserDetailsService: CustomUserDetailsService) : WebSecurityConfigurerAdapter() {
    @Override
    override fun configure(http: HttpSecurity?) {
        http!!.cors()
                .and()
                .csrf()
                .disable()
                .authorizeRequests()
                .requestMatchers().permitAll()
                .antMatchers("/user/registration")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .formLogin()
                .loginPage("/user/validate")
                .and()
                .logout()
                .logoutUrl("/user/logout")
                .and()
                .httpBasic();
    }


    @Autowired
    @Throws(Exception::class)
    fun configureGlobal(auth: AuthenticationManagerBuilder) {
        auth.userDetailsService(customUserDetailsService).passwordEncoder(NoOpPasswordEncoder.getInstance())
    }

    @Bean
    fun corsConfigurationSource(): CorsConfigurationSource {
        val source: UrlBasedCorsConfigurationSource = UrlBasedCorsConfigurationSource()
        val config: CorsConfiguration = CorsConfiguration();
        config.applyPermitDefaultValues().addAllowedHeader("Authorization")
        config.addExposedHeader("Authorization")
        config.addAllowedMethod("*")
        source.registerCorsConfiguration("/**", config)
        return source
    }


}
