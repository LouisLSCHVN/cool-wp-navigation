
/**
 *
 * const setupForm = () => {
 *     const forms = document.querySelectorAll('form:not(.ajax-processed)')
 *     forms.forEach(form => {
 *         form.addEventListener('submit', handleSubmit);
 *         form.classList.add('ajax-processed');
 *     })
 * }
 *
 * const handleSubmit = async (e) => {
 *     e.preventDefault();
 *
 *     const form = e.target.closest('form');
 *     console.log('Form:', form);
 *
 *     var formData = new FormData(form);
 *     var originalAction = formData.get('action');
 *
 *     if (!originalAction) {
 *         console.error('Action non trouvée dans le formulaire');
 *         return;
 *     }
 *
 *     // Remplacer l'action originale par notre action dynamique
 *     formData.set('action', 'dynamic_admin_action');
 *     formData.append('original_action', originalAction);
 *     formData.append('_ajax_nonce', wpAjaxFormsData.nonce);
 *
 *     var xhr = new XMLHttpRequest();
 *     xhr.open('POST', wpAjaxFormsData.ajax_url, true);
 *
 *     xhr.onload = function() {
 *         if (xhr.status >= 200 && xhr.status < 400) {
 *             try {
 *                 var response = JSON.parse(xhr.responseText);
 *                 if (response.success) {
 *                     alert('Opération réussie : ' + JSON.stringify(response.data));
 *                 } else {
 *                     alert('Erreur : ' + response.data.message);
 *                 }
 *             } catch (e) {
 *                 console.error('Réponse non-JSON reçue:', xhr.responseText);
 *                 alert('Une erreur inattendue s\'est produite. Veuillez vérifier la console pour plus de détails.');
 *             }
 *         } else {
 *             alert('Une erreur s\'est produite lors de la soumission du formulaire.');
 *         }
 *     };
 *
 *     xhr.onerror = function() {
 *         alert('Une erreur de connexion s\'est produite.');
 *     };
 *
 *     xhr.send(formData);
 * }
 */
/**
 * const handleSubmit = async (e) => {
 *     e.preventDefault();
 *     const form = e.target;
 *
 *     const formData = new FormData(form);
 *
 *     // Ajoutez l'action originale et la méthode aux données du formulaire
 *     formData.append('original_action', form.getAttribute('action') || 'null');
 *     formData.append('original_method', form.method);
 *     formData.append('action', 'cool_ajax_handler'); // Action WordPress pour notre gestionnaire global
 *     formData.append('nonce', wpAjaxFormsData.nonce);
 *     console.log('FormData:', Object.fromEntries(formData));
 *
 *
 *
 *     form.classList.add('loading');
 *
 *     try {
 *         const response = await fetch(wpAjaxFormsData.ajaxurl, {
 *             method: 'POST',
 *             body: formData,
 *             credentials: 'same-origin',
 *             headers: {
 *                 'X-Requested-With': 'XMLHttpRequest'
 *             }
 *         });
 *         console.log('Response:', response);
 *         if (!response.ok) throw new Error("Error submitting form!");
 *
 *         const responseText = await response.text();
 *         console.log("Response content:", responseText);
 *
 *         let responseData;
 *         try {
 *             responseData = JSON.parse(responseText);
 *         } catch (error) {
 *             console.log("Response is not JSON, using text content");
 *             responseData = { success: true, data: { html: responseText } };
 *         }
 *
 *         if (responseData.success) {
 *             if (responseData.data.message) {
 *                 showNotification(responseData.data.message);
 *             }
 *
 *             if (responseData.data.redirect) {
 *                 await navigate(responseData.data.redirect);
 *             } else if (responseData.data.html) {
 *                 // Mettre à jour le contenu de la page avec le HTML reçu
 *                 document.querySelector(SELECTORS.WP_BODY).innerHTML = responseData.data.html;
 *                 setupNavigation(); // Réinitialiser la navigation pour le nouveau contenu
 *             }
 *         } else {
 *             showErrorMessage(responseData.data.message || "An error occurred");
 *         }
 *
 *     } catch (error) {
 *         console.error("Error:", error);
 *         showErrorMessage(error.message);
 *     } finally {
 *         form.classList.remove('loading');
 *     }
 * };
 */