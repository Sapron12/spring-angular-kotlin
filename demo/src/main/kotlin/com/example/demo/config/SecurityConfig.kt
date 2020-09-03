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
    private val USER_PATH: String = "/user/"
    private val AUTORIZATION = "Authorization"

    @Override
    override fun configure(http: HttpSecurity?) {
        http!!.cors()
                .and()
                .csrf()
                .disable()
                .authorizeRequests()
                .requestMatchers().permitAll()
                .antMatchers("${USER_PATH}registration")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .formLogin()
                .loginPage("${USER_PATH}validate")
                .and()
                .logout()
                .logoutUrl("${USER_PATH}logout")
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
        config.applyPermitDefaultValues().addAllowedHeader(AUTORIZATION)
        config.addExposedHeader(AUTORIZATION)
        config.addAllowedMethod("*")
        source.registerCorsConfiguration("/**", config)
        return source
    }


}
